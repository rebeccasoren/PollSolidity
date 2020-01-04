# Poll
![Version](https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000)


> A solidity smart contract for a Polling system

## Prerequisites
Metamask extension is required to interact with the contract [https://github.com/MetaMask]

## Deploy App
Run ```sh npm run dev ``` for a dev server. Navigate to ```http://localhost:3000/```

## Contract Details 
The current version of the contract is deployed by account ```0x69aED79C0D76D38e8C8D173ccdb3EE9ddb6856ae``` to ```0x405aeE0836fcC5c7EEF08D4061934c77E3AF460E``` on the Rinkeby Test Network.

### To redeploy the Contract
A new instance of the contract will be created from your account

Switch to ```./ethereum```. Run ```sh node compile.js``` then ```sh node deploy.js```

Copy the address that contract is deployed to from the terminal and paste it in ```ethereum/poll.js```

## Run tests
Run ```sh npm run test``` to test out the contract
