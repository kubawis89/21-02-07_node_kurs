const express = require("express");
const path = require("path");
const fromAnotherFile = require("./functions");
const port = process.env.PORT || 3000;
const app = express();

const sample = () => {return "proba"};

app.set("view engine","hbs");

app.use("/assets",express.static(path.join(__dirname,"./assets")))
app.use("/js",express.static(path.join(__dirname,"./js")))

app.get("/", function (req,res) {
    res.render('index', {
        pageTitle: "Dzisiejsza lekcja", //deklaracja
        subTitle: fromAnotherFile.title, //z innego pliku
        subsubTitle: sample() //z funkcji w tym pliku
    })
})

app.get("/about", function (req,res) {
    res.send("<h2>Strona o nas</h2>")
})

app.listen(port, (err) => {
    if (err) { return console.log(err)}
    console.log("Działa na porice",port)
})