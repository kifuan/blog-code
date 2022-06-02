class Rectangle {
    constructor(width, height) {
        this.width = width
        this.height = height
    }

    draw() {
        console.log(`Drawing a rectangle, size: ${this.width}x${this.height}`)
    }

    clone() {
        return new Rectangle(this.width, this.height)
    }
}

class Circle {
    constructor(radius) {
        this.radius = radius
    }

    draw() {
        console.log(`Drawing a circle, radius: ${this.radius}`)
    }

    clone() {
        return new Circle(this.radius)
    }
}

class ShapeFactory {
    constructor(prototypeShape) {
        this.prototypeShape = prototypeShape
    }

    create() {
        return this.prototypeShape.clone()
    }
}

function draw(factory) {
    factory.create().draw()
}

const factory1 = new ShapeFactory(new Rectangle(3, 5))
const factory2 = new ShapeFactory(new Circle(5))

draw(factory1)
// Drawing a reactangle, size: 3x5

draw(factory2)
// Drawing a circle, radius: 5
