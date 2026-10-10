// var http = require('http');
// var url = require('url');

// http.createServer(function(req, res) {
//     res.writeHead(200, {'Content-Type' : 'text/html'});
//     var q = url.parse(req.url, true).query;
//     var txt = q.year + "  " + q.month;
//     res.end(txt);
// }).listen(8080, function() {
//     console.log("Server is running at http://localhost:8080");
// }); 
// It shows undefined undefined. 
// solve it by typing in URL -> http://localhost:8080/?year=2026&month=may  

var http = require('http');
var url = require('url');

http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type' : 'text/html'});
    var q = url.parse(req.url, true).query;
    var query = new URLSearchParams({q:q.search}).toString();
    var googleUrl = 'https://www.google.com/search?' + query;
    res.end(googleUrl);
}).listen(8080, function() {
    console.log("Server is running at http://localhost:8080");
}); 

// Output: https://www.google.com/search?q=undefined
// to solve it, you can type in URL -> http://localhost:8080/?search=javascript