'use strict';

var url = require('url');


var Post = require('./PostService');


module.exports.addPost = function addPost (req, res, next) {
    var authorizationValues = req.headers.authorization.split(",")

    for (var index in authorizationValues) {
        var map = authorizationValues[index].split("=")

        if(map[0].trim() == "oauth_consumer_key") {
            if (map[1].trim() != "\"xaZfTu56TPBzFTxypjmRFySRLxzJcQ1m2vqtwDUY34bf5d25!ede9b31b31d14a68b91bad48dc0a1e400000000000000000\"") {
                res.writeHead(500, {'Content-Type': 'application/json'});
                res.end(JSON.stringify({error: "Consumer Key should be: xaZfTu56TPBzFTxypjmRFySRLxzJcQ1m2vqtwDUY34bf5d25!ede9b31b31d14a68b91bad48dc0a1e400000000000000000"}));
                return;
            }
        }
    }

  Post.addPost(req.swagger.params, res, next);
};

module.exports.deletePost = function deletePost (req, res, next) {
  Post.deletePost(req.swagger.params, res, next);
};

module.exports.listPosts = function listPosts (req, res, next) {
  Post.listPosts(req.swagger.params, res, next);
};

module.exports.readPost = function readPost (req, res, next) {
  Post.readPost(req.swagger.params, res, next);
};

module.exports.updatePost = function updatePost (req, res, next) {
  Post.updatePost(req.swagger.params, req, res, next);
};
