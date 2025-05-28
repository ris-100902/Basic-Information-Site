const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    res.writeHead(200, { "content-type": 'text/html'});
    if (req.url == '/') res.write(fs.readFileSync('index.html'));
    else if (req.url == '/about') res.write(fs.readFileSync('about.html'));
    else if (req.url == '/contact-me') res.write(fs.readFileSync('contact-me.html'));
    else res.write(fs.readFileSync('404.html'));
    return res.end();
});
server.listen(8080);
