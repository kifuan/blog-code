class Point {
    constructor(x, y) {
        this.x = x
        this.y = y
    }
}

const PointProxy = new Proxy(Point, {
    construct(target, args, newTarget) {
        args = args.map(n => n * 10)
        return Reflect.construct(target, args, newTarget)
    }
})