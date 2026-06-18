const fs = require('fs');
const https = require('https');

let content = fs.readFileSync('data.js', 'utf8');
let match;
let urls = [];
let titles = [];

const regex = /"title":\s*"(.*?)",\s*"imageUrl":\s*"(.*?)"/g;

while((match = regex.exec(content)) !== null) {
  titles.push(match[1]);
  urls.push(match[2]);
}

console.log('Found', urls.length, 'URLs. Checking...');

let broken = [];
let checked = 0;
let done = false;

urls.forEach((u, i) => {
  https.get(u, res => {
    if (res.statusCode >= 400 || res.statusCode === 301 || res.statusCode === 302) {
      if (res.statusCode === 403) {
         // Some CDNs return 403 if accessed without user agent, but it works in browser.
         // Let's assume 404 is the true marker of "deleted"
      }
      if (res.statusCode === 404) {
          broken.push({ title: titles[i], url: u, status: res.statusCode });
      }
    }
    checkDone();
  }).on('error', (err) => {
    broken.push({ title: titles[i], url: u, status: 'error' });
    checkDone();
  });
});

function checkDone() {
  checked++;
  if (checked === urls.length && !done) {
    done = true;
    console.log('Broken URLs:', broken);
  }
}
