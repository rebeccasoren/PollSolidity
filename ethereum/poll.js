import web3 from './web3';
import Poll from './build/Poll.json';

const instance = new web3.eth.Contract(
    JSON.parse(Poll.interface),
    '0x405aeE0836fcC5c7EEF08D4061934c77E3AF460E'
);

export default instance;