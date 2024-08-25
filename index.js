const inquirer = require("inquirer")
const Svg = require("./lib/svg")
const { Circle, Triangle, Square } = require("./lib/shapes")
const fs = require("fs")
inquirer.prompt([
    {
        type: "list",
        name: "shapes",
        message: "What's your shape for SVG",
        choices: ["Triangle", "Circle", "Square"]
    },

    {
        type: "list",
        name: "shapescolor",
        message: "What's your shapecolor for SVG",
        choices: ["red", "blue", "green", "black", "white", "purple", "pink"]
    },

    {
        type: "input",
        name: "text",
        message: "What's your text for SVG",

    },

    {
        type: "list",
        name: "textcolor",
        message: "What's your textcolor for SVG",
        choices: ["red", "blue", "green", "black", "white", "purple", "pink"]
    },

]).then(answers => {
    const userSvg = new Svg(answers.textcolor)
    userSvg.setText(answers.text)
    switch (answers.shapes) {
        case "Triangle":
            let userShape1 = new Triangle(answers.shapescolor)
            userSvg.setShape(userShape1.render());
            break;
        case "Circle":
            let userShape2 = new Circle(answers.shapescolor)
            userSvg.setShape(userShape2.render());
            break;
        case "Square":
            let userShape3 = new Square(answers.shapescolor)
            userSvg.setShape(userShape3.render());
            break;
    }
    fs.writeFile("logo.svg",userSvg.render(),function(err){
        if(err) throw err;
    })
})