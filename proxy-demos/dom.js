const dom = new Proxy({}, {
    get(_, tag) {
        return (...children) => {
            const el = document.createElement(tag)
            children.forEach(child => {
                if (typeof child === 'string') {
                    child = document.createTextNode(child)
                }
    
                if (child instanceof Node) {
                    // 所有DOM都继承了Node
                    el.appendChild(child)
                } else {
                    // 如果child不是Node就认为它是属性对象
                    Object.entries(child).forEach(([key, value]) => {
                        el.setAttribute(key, value)
                    })
                }
            })

            return el
        }
    }
})

const root = document.getElementById('root')
const el = dom.p(
    dom.span('Hello! '),
    'This is ',
    dom.a('my website', { href: 'https://kifuan.top', target: '_blank' }),
)
root.appendChild(el)