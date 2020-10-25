const db = require('../../db');
module.exports.routes = {
  'GET /products/:ean': async function (req, res) {
    const ean = req.params.ean;
    const ress = await db.findAsync(Number.parseInt(ean));
    return res.send(ress);
  }
};
