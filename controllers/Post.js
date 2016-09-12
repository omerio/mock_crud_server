'use strict';

var url = require('url');
var oauth = require('../utils/oauth')


var Post = require('./PostService');


module.exports.addPost = function addPost (req, res, next) {
    var send_1 = "xaZfTu56TPBzFTxypjmRFySRLxzJcQ1m2vqtwDUY34bf5d25!ede9b31b31d14a68b91bad48dc0a1e400000000000000000";
    var type = {'Content-Type': 'application/json'};

    var consumerKey = oauth.getConsumerKey(req);

    if (!consumerKey) {
        res.writeHead(500, type);
        res.end(JSON.stringify({error: "No Consumer Key found in Authorisation header. Consumer Key should be: " + send_1}));
        return;
    }

    if (consumerKey != "\"xaZfTu56TPBzFTxypjmRFySRLxzJcQ1m2vqtwDUY34bf5d25!ede9b31b31d14a68b91bad48dc0a1e400000000000000000\"") {
        res.writeHead(500, type);
        res.end(JSON.stringify({error: "Consumer Key should be: " + send_1}));
        return;
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
