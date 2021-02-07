/*const http = require('http');
const handler = (request, response) => {  //request i response to nazwy umowne mogą być inne np bla1 i bla 2
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
*/
    //   --------------  EXPRESS --------------------------
const express = require("express"); //express zamiast http
const port = 3000; //port i app dobrowolne nazwy
const app = express();
        //gdy uzytkownik wchodzi na stronę główną
app.get('/', function (req, res) { //'/' -> adres strony głównej
    res.send("<h2> Hello World </h2>");
})
app.listen(port, (err) => {
    if (err) {
        return console.log("Coś poszło nie tak...:", err)
    }
    console.log(`Serwer działa na porcie ${port}`);
})