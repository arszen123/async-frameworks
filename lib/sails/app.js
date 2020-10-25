process.chdir(__dirname);

let sails;
let rc;
const Sails = require('sails').constructor;
sails = new Sails();
rc = require('sails/accessible/rc');

const promisify = require('util').promisify;

exports.start = promisify(function start(cb) {
  sails.lift(rc('sails'), function () {cb(null, sails.config.port)});
});

exports.stop = async function stop() {
  sails.lower();
};
