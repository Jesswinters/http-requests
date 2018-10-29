const {getHTML} = require('../http-functions');

const requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/1337.html'
};

function replacer(string) {
  const replacements = {
    'a': '4',
    'e': '3',
    'l': '1',
    'o': '0',
    's': '5',
    't': '7',
    'ck': 'x',
    'er': '0r',
    'you': 'j00'
  };

  return string.replace(/a|e|l|o|s|t|ck|er|you/g, char => replacements[char]);
}

function print1337 (html) {
  console.log(replacer(html));
}

getHTML(requestOptions, print1337);
