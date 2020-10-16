// import Web3 from 'web3';

// let web3;

// if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
//   // We are in the browser and metamask is running.
//   web3 = new Web3(window.web3.currentProvider);
// } else {
//   // We are on the server *OR* the user is not running metamask
//   const provider = new Web3.providers.HttpProvider(
//     'https://rinkeby.infura.io/orDImgKRzwNrVCDrAk5Q'
//   );
//   web3 = new Web3(provider);
// }
const Web3 = require("web3");
const ethEnabled = () => {
  if (window.ethereum) {
    window.web3 = new Web3(window.ethereum);
    window.ethereum.enable();
    return true;
  }
  return false;
}
if (!ethEnabled()) {
  alert("Please install an Ethereum-compatible browser or extension like MetaMask to use this dApp!");
}
export default web3;