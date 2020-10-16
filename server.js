const { createServer } = require('http');
const next = require('next');

const ethEnabled = () => {

  if (window.ethereum) {

    window.web3 = new Web3(window.ethereum);

    window.ethereum.enable();

    return true;

  }

  return false;

}
const app = next({
  dev: process.env.NODE_ENV !== 'production',
  conf: {
    webpack: config => {
      config.devtool = false;

      for (const r of config.module.rules) {
        if (r.loader === 'babel-loader') {
          r.options.sourceMaps = false;
        }
      }

      return config;
    }
  }
});

const routes = require('./routes');
const handler = routes.getRequestHandler(app);

app.prepare().then(() => {
  createServer(handler).listen(process.env.PORT || 3000, (err) => {
    if (err) throw err;
    console.log('Ready on localhost:3000');
  });
});