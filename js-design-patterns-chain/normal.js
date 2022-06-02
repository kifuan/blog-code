const NEXT = Symbol('next')

function order500(type, paid, left) {
    if (type === '500' && paid && left > 0) {
        return '30% off'
    }
    return NEXT
}

function order100(type, paid, left) {
    if (type === '100' && paid && left > 0) {
        return '10% off'
    }
    return NEXT
}

function orderNormal(type, paid, left) {
    if (type === 'normal' && paid && left > 0) {
        return 'no discount'
    }
    return NEXT
}

Function.prototype.next = function(f) {
    return (...args) => {
        const res = this.apply(undefined, args)
        if (res === NEXT) {
            return f.apply(undefined, args)
        }
        return res
    }
}

const order = order500.next(order100).next(orderNormal).next(() => {
    return 'you cannot buy it'
})

console.log(order('500', true, 3))
// 30% off

console.log(order('100', true, 2))
// 10% off

console.log(order('normal', true, 1))
// no discount

console.log(order('normal', true, 0))
console.log(order('normal', false, 5))
// you cannot buy it