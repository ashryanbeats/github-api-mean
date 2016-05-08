const request = require('request-promise');

module.exports = {
  index: index,
  user: user
}

function index (req, res, next) {
  res.send('index');
}

function user (req, res, next) {

  let options = {
    method: 'GET',
    uri: 'https://api.github.com/user',
    qs: {
      access_token: req.query.access_token  
    },
    headers: {
      'User-Agent': 'github-api-test-mean'
    },
    json: true
  };

  console.log(options);

  request(options)
    .then(function(data) {
      res.send(data);
    })
    .catch(function(err) {
      res.send(err);
    });
}