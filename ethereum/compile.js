const path = require('path');
const solc = require('solc');
const fs = require ('fs-extra');
const buildPath = path.resolve(__dirname, 'build');
const pollPath = path.resolve(__dirname, 'contracts', 'Poll.sol');
const source = fs.readFileSync(pollPath, 'utf8');
const output = solc.compile(source, 1).contracts;

for (let contract in output) {
    fs.outputJSONSync(
        path.resolve(buildPath, contract.replace(':','') + '.json'),
        output[contract]
    );
   
}