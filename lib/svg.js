class Svg {
    constructor(textColor) {
        this.textColor = textColor
        this.text = ""
        this.shape = ""
    }
    setText(text) {
        this.text = text
    }
    setShape(shape) {
        this.shape = shape
    }
    render() {
        return `
        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">
        ${this.shape}

  <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>

</svg>
        `
    }
}

module.exports = Svg