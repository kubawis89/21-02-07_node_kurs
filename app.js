const http = require('http');
const handler = (request, response) => {
    console.log("sample message");
    response.end("Hello World");
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