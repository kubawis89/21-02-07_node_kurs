const helloWorld = () => {
    console.log("Hello World")
}

const add = (a,b) => {console.log(a+b)}

module.exports = { 
    helloWorld,
    add
}

console.log("Plik załadowano pomyślnie") //sprawdzenie czy plik functions się zaimportował do app.js