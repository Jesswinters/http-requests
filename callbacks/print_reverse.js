const {getHTML} = require('../http-functions');

const requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/reverse.html'
};

function printReverse (html) {
  console.log(html.split(/\s/).reverse().join(' '));
}

getHTML(requestOptions, printReverse);
