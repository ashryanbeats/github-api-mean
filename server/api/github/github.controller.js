const request = require('request-promise');

module.exports = {
  index: index,
  user: user,
  repos: repos,
  commits: commits
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

  request(options)
    .then(function(data) {
      res.send(data);
    })
    .catch(function(err) {
      res.send(err);
    });
}

function repos (req, res, next) {

  let options = {
    method: 'GET',
    uri: req.query.repos_url,
    qs: {
      access_token: req.query.access_token  
    },
    headers: {
      'User-Agent': 'github-api-test-mean'
    },
    json: true
  };

  request(options)
    .then(function(data) {
      res.send(data);
    })
    .catch(function(err) {
      res.send(err);
    });
}

function commits(req, res, next) {

  let options = {
    method: 'GET',
    uri: 'https://api.github.com/users/' + req.query.username + '/events',
    qs: {
      access_token: req.query.access_token
    },
    headers: {
      'User-Agent': 'github-api-test-mean'
    },
    json: true
  };

  request(options)
    .then(function(data) {

      function hasCommit(obj) {
        if (obj.payload.commits) {
          return true;
        }
      }

      // data.forEach(function(e) {
      //   if (e.payload.commits) {
      //     console.log(!!e.payload.commits);
      //   }
      // })

      res.send(data.filter(hasCommit));
    })
    .catch(function(err) {
      res.send(err);
    });
}