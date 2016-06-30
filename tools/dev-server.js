/* eslint-disable */
var express = require('express');
var cors = require('cors');
var proxy = require('express-http-proxy');
var url = require('url');

var server = express();

server.use(cors());

server.use(express.static('../dist/'));
server.use('/api', proxy('localhost:8080', {
    forwardPath: function(req, res) {
        return "/api" + url.parse(req.url).path;
    }
}));

server.listen(+process.env.PORT || 8888);

livereload = require('livereload');
server = livereload.createServer();
server.watch(__dirname);
/* eslint-enable */