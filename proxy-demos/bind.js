'use strict'

function bindUpdates(setProp) {
    return Array.from(document.querySelectorAll('*[data-update]'))
        .reduce((pre, cur) => {
            const key = cur.dataset.update
            cur.addEventListener('keyup', () => {
                setProp(key, cur.value)
            })
            // 一个key只会被一个DOM更新
            return { ...pre, [key]: cur }
        }, {})
}

function bindValues() {
    return [...document.querySelectorAll('*[data-value]')]
        .reduce((pre, cur) => {
            const key = cur.dataset.value
            // 一个key会被多个DOM读取
            pre[key] ||= []
            pre[key].push(cur)
            return pre
        }, {})
}

function bind() {
    const values = bindValues()

    const updates = bindUpdates((key, value) => {
        data[key] = value
    })

    const data = new Proxy({}, {
        set(_, key, value) {
            values[key].forEach(el => {
                if (el.value !== undefined) {
                    el.value = value
                } else {
                    el.innerText = value
                }
            })
            // 表示设置成功
            return true
        },

        get(_, key) {
            return updates[key].value
        }
    })

    return data
}

const data = bind()