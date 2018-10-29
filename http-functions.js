const https = require('https');

function getHTML(options, callback) {
  https.get(options, function(response) {
    response.setEncoding('utf8');

    let chunk = '';

    response.on('data', function(data) {
      chunk += data;
    });

    response.on('end', function() {
      callback(chunk);
    });
  });
}

module.exports.getHTML = getHTML;
