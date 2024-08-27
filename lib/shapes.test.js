const{Circle,Triangle,Square}=require("./shapes")


// const shape = new Triangle();
// shape.setColor("blue");
// expect(shape.render()).toEqual`<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;

describe ("Triangle",() =>{
test("it should render a blue svg element",()=>{
    const expectSvg = '<polygon points="150, 18 244, 182 56, 182" fill="blue"/>'
const triangle = new Triangle()
triangle.setcolor("blue")
const createdSvg = triangle.render()
expect(createdSvg).toEqual(expectSvg)
})
})

describe ("Circle",() =>{
    test("it should render a green svg element",()=>{
        const expectSvg = '<circle xmlns="http://www.w3.org/2000/svg" cx="150" cy="100" r="80" fill="green"/>'
    const circle = new Circle()
    circle.setcolor("green")
    const createdSvg = circle.render()
    expect(createdSvg).toEqual(expectSvg)
    })
    })

    describe ("Square",() =>{
        test("it should render a red svg element",()=>{
            const expectSvg = '<rect x="60" y="10" rx="10" ry="10" width="150" height="150" fill ="red"/>'
        const square = new Square()
        square.setcolor("red")
        const createdSvg = square.render()
        expect(createdSvg).toEqual(expectSvg)
        })
        })
        