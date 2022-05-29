class Foo {}

const FooProxy = new Proxy(Foo, {
    construct(target, args, newTarget) {
        console.log(newTarget)
        return Reflect.construct(target, args, newTarget)
    }
})

class Bar extends FooProxy {}

new FooProxy()
// [class Foo]

new Bar()
// [class Bar extends Foo]