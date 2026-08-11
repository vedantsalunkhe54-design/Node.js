const http = require("http");
const fs = require("fs");
const url = require("url");

const server = http.createServer((req, res) => {

    const data = `${Date.now()} ${req.url}: New Req Received\n`;

    const myurl = url.parse(req.url, true);
    console.log(myurl);

    if (req.url === "/favicon.ico") {
        res.end();
        return;
    }

    fs.appendFile("data.txt", data, (err) => {

        switch (myurl.pathname) {

            case "/":
                res.end("Hello World!");
                break;

            case "/about":
                const username = myurl.query.myname;
                res.end(`Hello ${username}`);
                break;

            default:
                res.end("404 Not Found");
        }
    });
});

server.listen(8000, () => {
    console.log("Server started on port 8000");
});