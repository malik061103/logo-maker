class Shape{
constructor (color){
    this.color=color
}
}
class Circle extends Shape{
    constructor(color){
        super(color)
    }
    render(){
        return `<circle xmlns="http://www.w3.org/2000/svg" cx="150" cy="100" r="80" fill="${this.color}"/>`
    }
}

class Square extends Shape{
    constructor(color){
        super(color)
    }
    render(){
return `<rect x="60" y="10" rx="10" ry="10" width="150" height="150" fill =${this.color}/>`;
       
    }
}
class Triangle extends Shape{
    constructor(color){
        super(color)
    }
    render(){
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`
    }
}
module.exports = {
    Circle,Square,Triangle
}