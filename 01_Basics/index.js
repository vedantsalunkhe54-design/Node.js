const http = require ("http");
const fs = require ('fs');


const server = http.createServer((req, res) => {
    const data = `${Date.now().toString()} ${req.url}: New Req Received \n`;
    fs.appendFile('data.txt', data, (err, data) => {
        switch (req.url) {
            case '/':
                res.end('Hello World !');
            break;
            case '/about':
                res.end('About Page');
            break;
            default:
                res.end('404 Not Found');
        }
                
         
    })
})

server.listen(8000, () => {
    console.log('Listening on port 8000');
});