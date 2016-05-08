const request = require('request-promise');
const api_keys = require('../../config');

module.exports = {
  index: index,
  callback: callback
}

function index (req, res, next) {
  res.send("hai")
}

function callback (req, res, next) {

  let sessionCode = req.query.code;

  let options = {
    method: 'POST',
    uri: 'https://github.com/login/oauth/access_token',
    body: {
      client_id: api_keys.CLIENT_ID,
      client_secret: api_keys.CLIENT_SECRET,
      code: sessionCode,
      accept: 'json'  
    },
    json: true
  };

  console.log(options)

  request(options)
    .then(function(data) {
      console.log("DATA", data);
      res.send(data);
    })
    .catch(function(err) {
      console.error('Error: /api/auth/callback');
      res.send(err);
    });
}