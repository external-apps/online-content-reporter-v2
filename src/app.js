const Express = require('express');
const Path = require('path');
const app = express();

//const route = require('router');

app.use(Express.static(Path.join(__dirname+'../public')));

// app.use(router);

module.exports = app;
