const HDWalletProvider=require('truffle-hdwallet-provider');
const Web3=require('web3');
const compiledManager = require('./build/Poll.json');

const provider=new HDWalletProvider(
    'neither breeze hamster noise sign embody shove thrive spin churn review gap',
    'https://rinkeby.infura.io/v3/d157c9cb8cbb4eec867d947bc0af8bb5'
);
const web3=new Web3(provider);

const deploy=async()=>{
    const accounts= await web3.eth.getAccounts();
    console.log('Attempting to deploy from account',accounts[0]);
    
    const result= await new web3.eth.Contract(JSON.parse(compiledManager.interface))
    .deploy({data: compiledManager.bytecode})
    .send({gas:'1000000', from: accounts[0]});

console.log('Contract deployed to', result.options.address);
};
deploy();