const helloWorld = () => {
    console.log("Hello World")
}

const add = (a,b) => {console.log(a+b)}
const title = "07.02.2021r"


module.exports = { 
    helloWorld,
    add,
    title
}

console.log("Plik załadowano pomyślnie") //sprawdzenie czy plik functions się zaimportował do app.js

