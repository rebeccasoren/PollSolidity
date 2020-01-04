require("events").EventEmitter.defaultMaxListeners = 100;

const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const web3 = new Web3(ganache.provider());

const compiledPoll = require('../ethereum/build/Poll.json');

let accounts;
let poll;

beforeEach(async () => {
    accounts = await web3.eth.getAccounts();

    poll = await new web3.eth.Contract(JSON.parse(compiledPoll.interface))
    .deploy({ data: compiledPoll.bytecode })
    .send({ from:accounts[0], gas:'1000000'});
});

describe('Polls', ()=> {
    it('deploys a campaign', ()=> {
        assert.ok(poll.options.address);
    });

    it('marks caller as manager', async () =>{
        const caller = await poll.methods.manager().call();
        assert.equal(accounts[0], caller);
    });

    it('creates question', async()=>{
        await poll.methods.askQuestion('Hello?').send({
            from:accounts[0],
            gas: '1000000'
        });
        const question= await poll.methods.questions(0).call();
        assert.equal('Hello?', question.description);
    });

    it('only manager can create question', async()=>{
        try{
            await poll.methods.askQuestion('Hello?').send({
                from:accounts[1],
                gas: '1000000'
            });
            const question= await poll.methods.questions(0).call();
            assert.equal('Hello?', question.description);
            assert(false);
        }
        catch(err) {
            assert(err);
        }
    });

    it('a caller can vote', async ()=>{
        await poll.methods.askQuestion('Hello?').send({
            from:accounts[0],
            gas: '1000000'
        });
        await poll.methods.voteYay(0).send({
            from:accounts[0],
            gas: '1000000'
        });

        const question = await poll.methods.questions(0).call();
        assert.equal(1, question.yays);
    });

    it('a caller cannot vote twice', async ()=>{
        try{
            await poll.methods.askQuestion('Hello?').send({
                from:accounts[0],
                gas: '1000000'
            });
            await poll.methods.voteYay(0).send({
                from:accounts[0],
                gas: '1000000'
            });
            await poll.methods.voteNay(0).send({
                from:accounts[0],
                gas: '1000000'
            });
            assert(false);
        }
        catch(err){
            assert(err);
        }


        
        
    });

    it('multiple callers can vote', async () =>{
        await poll.methods.askQuestion('Hello?').send({
            from:accounts[0],
            gas: '1000000'
        });
        await poll.methods.voteYay(0).send({
            from:accounts[0],
            gas: '1000000'
        });
        await poll.methods.voteNay(0).send({
            from:accounts[1],
            gas: '1000000'
        });
        const question = await poll.methods.questions(0).call();
        assert.ok(question.yays);
        assert.ok(question.nays);
    });

    it('question gives answer', async()=>{
        await poll.methods.askQuestion('Hello?').send({
            from:accounts[0],
            gas: '1000000'
        });
        await poll.methods.voteNay(0).send({
            from:accounts[0],
            gas: '1000000'
        });
        await poll.methods.voteNay(0).send({
            from:accounts[1],
            gas: '1000000'
        });
        await poll.methods.updateAnswer(0).send({
            from:accounts[0],
            gas: '1000000'
        });
        const answer = await poll.methods.getAnswer(0).call();
        const question = await poll.methods.questions(0).call();
        assert.equal(question.complete, true);
        assert(answer);
    });
   
    it('caller cannot vote after answer is declared', async ()=>{
        try{
            await poll.methods.askQuestion('Hello?').send({
                from:accounts[0],
                gas: '1000000'
            });
            await poll.methods.voteNay(0).send({
                from:accounts[0],
                gas: '1000000'
            });
            await poll.methods.updateAnswer(0).send({
                from:accounts[0],
                gas: '1000000'
            });
            await poll.methods.voteNay(0).send({
                from:accounts[1],
                gas: '1000000'
            });
            assert(false);
        }
        catch(err){
            assert(err);
        }
    });

    it('cannot call GetAnswer without UpdateAnswer', async() =>{
        try{
            await poll.methods.askQuestion('Hello?').send({
                from:accounts[0],
                gas: '1000000'
            });
            await poll.methods.voteNay(0).send({
                from:accounts[0],
                gas: '1000000'
            });
            await poll.methods.getAnswer(0).call();
            assert(false);
        }
        catch(err){
            assert(err);
        }
    });
});