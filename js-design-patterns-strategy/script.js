const strategies = {
    levelA(salary) {
        return salary * 4
    },

    levelB(salary) {
        return salary * 3
    },

    levelC(salary) {
        return salary * 2
    }
}

function calcSalary(level, salary) {
    return strategies[level](salary)
}

console.log(calcSalary('levelA', 25000))
// 100000

console.log(calcSalary('levelB', 15000))
// 45000

console.log(calcSalary('levelC', 10000))
// 20000