// while https is built-in to Node, it is a module, so it must be required
const https = require('https');

const requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

function getHTML (options, callback) {
  // notice that https.get takes a callback with one parameter -
  // response, which is a Stream that represents the HTTP response
  https.get(options, function (response) {
    // set encoding of received data to UTF-8
    response.setEncoding('utf8');

    let chunk = '';

    // the callback is invoked when a `data` chunk is received
    response.on('data', function (data) {
      chunk += data;
      return chunk;
    });

    // the callback is invoked when all of the data has been received
    // (the `end` of the stream)
    response.on('end', function() {
      console.log(chunk);
    });
  });
}

function printHTML (html) {
  console.log(html);
}

getHTML(requestOptions, printHTML);
