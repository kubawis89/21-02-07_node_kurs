const http = require('http');
const handler = (request, response) => {
    response.end("<h1> Hello World </h1>");
    console.log("sample message");
}
const server = http.createServer(handler);
const port = 3000;

//server.listen(port, () => {
//  console.log(`Serwer działa na porcie ${port}`);
//})

server.listen(port, (err) => {
    if (err) {
        return console.log("Coś poszło nie tak...:", err)
    }
    console.log(`Serwer działa na porcie ${port}`);
})