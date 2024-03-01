var express = require('express');
var router = express.Router();
const PostCode = require('../model/Postcode');
const PostCodes = require('../model/Postcodes');
const Response = require('../model/Response');

const postCodes = new PostCodes();
postCodes.loadPostcodesByJSON(require('../data/australian_postcodes.json'));

/* GET home page. */
router.get('/by-postcode', function(req, res, next) {
  const query = req.query;
  const postcodes = query.postcodes.split(',');
  const result = [];
  const response = new Response();
  for (const postcode of postcodes) {
    const p = postCodes.getPostcodeByPostcode(postcode);
    if (p) {
      response.addData(p.getResponseObject());
    } else {
      response.addError(`Postcode ${postcode} not found`);
    }
  }
  res.json(response.getResponse());

});

module.exports = router;
