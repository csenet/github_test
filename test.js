const request = require('request');

const userName = "yshogo";

var options = {
  url: `https://github.com/users/${userName}/contributions`
}

request(options, function (error, response, body) {
  body = body.replace(/<("[^"]*"|'[^']*'|[^'">])*>/g,''); // タグを除去
  body = body.replace(/ |,|\r?\n/g, '');                  // 不要な文字を除去
  body = body.match(/^[0-9]*/);
  console.log(body[0]);
})