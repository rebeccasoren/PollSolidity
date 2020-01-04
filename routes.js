const routes = require('next-routes')();

routes
    .add('/ongoing','/ongoing')
    .add('/results','results')
    .add('/ongoing/add','/ongoing/add');
module.exports=routes;