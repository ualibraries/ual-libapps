var static = require('node-static');

//
// Create a node-static server instance to serve the './public' folder
//
var file = new static.Server('./dist/', {
                headers: {
                  'Access-Control-Allow-Origin': '*',
                  'Access-Control-Allow-Methods': 'GET',
                  'Access-Control-Allow-Headers': 'Content-Type'
                }
});

require('http').createServer(function (request, response) {
  request.addListener('end', function () {
    file.serve(request, response);
  }).resume();
}).listen(8000);

console.log("Static server running on port 8000")
console.log("Run 'ngrok http -bind-tls=true 8000' in a separate terminal to expose assets to the Internet")
