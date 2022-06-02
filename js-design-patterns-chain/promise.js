function order(type, paid, left) {
    return new Promise((next, success) => {
        if (type === '500' && paid && left > 0) {
            success('30% off')
        } else {
            next()
        }
    }).then(() => new Promise((next, success) => {
        if (type === '100' && paid && left > 0) {
            success('10% off')
        } else {
            next()
        }
    })).then(() => new Promise((next, success) => {
        if (type === 'normal' && paid && left > 0) {
            success('no discount')
        } else {
            next()
        }
    })).then(() => new Promise((_, success) => {
        success('you cannot buy it')
    })).catch((msg) => {
        console.log(msg)
    })
}

order('500', true, 3)
// 30% off

order('100', true, 2)
// 10% off

order('normal', true, 1)
// no discount

order('normal', true, 0)
order('normal', false, 5)
// you cannot buy it