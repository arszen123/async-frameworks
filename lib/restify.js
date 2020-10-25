'use strict';
const restify = require('restify');
const promisify = require('util').promisify;
const db = require('./db');

const server = restify.createServer();

server.get('/products/:ean', (req, res, next) => {
  const ean = +req.params.ean;
  db.findCb(ean, (err, result) => {
    if (err) return next(err);
    res.send(result);
    return next();
  });
});
exports.start = promisify(function start(cb) {
  server.listen(function() {
    cb(null, server.getDebugInfo().server.port);
  });
});
