'use strict';
// some reasons its much slower then the minimal version.
const db = require('./db');
const promisify = require('util').promisify;

const sails = require('sails');

exports.start = promisify(function start(cb) {
  sails.lift({
    log: {
      level:'silent'
    },
    routes: {
      'GET /products/:ean': async function(req, res) {
        const ean = req.params.ean;
        const ress = await db.findAsync(Number.parseInt(ean));
        return res.send(ress);
      }
    }
  }, function () {cb(null, sails.config.port)});
});

exports.stop = async function stop() {
  sails.lower();
};
