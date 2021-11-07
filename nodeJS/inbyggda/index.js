const http = require("http");
const url = require("url");

const exampleAddress = "http://localhost:1338/?year=2021&Month=January";

console.log("Starting file...");
http
  .createServer((request, response) => {
    response.writeHead(200, {
      "Content-Type": "text/html",
    });
    console.log("Server is running");
    let q = url.parse(request.url, true).query;
    console.log(q);
    let txt = q.year + " + " + q.month;
    console.log(txt);
    const split = url.parse(request.url, true);
    console.log(split);
    //    console.log(split.search);

    response.end();
  })
  .listen(1338);
