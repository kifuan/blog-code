(function () {
    const container = document.getElementById("speak")

    // Simplify the progress of creating DOMs
    function dom(tag, cls, ...children) {
        const el = document.createElement(tag)
        el.className = cls
        // Append all the children, converting it to TextNode if it is string
        children.forEach(child => {
            if (typeof child === 'string') {
                child = document.createTextNode(child)
            }
            el.appendChild(child)
        })
        return el
    }

    // Create the DOM tree following CSS
    function createCard(type, title, date, content, id) {
        return dom('div', 'speak-card',
            dom('div', 'speak-card-status-' + type),
            dom('div', 'speak-card-content',
                dom('div', 'speak-card-title',
                    title, dom('span', 'speak-card-id', '#' + id)
                ),
                content,
                dom('div', 'speak-card-date', date)
            )
        )
    }
    
    const data = [
        {
            type: 'success',
            date: '1999-12-31 00:00',
            title: 'TITLE',
            content: 'CONTENT'
        }
    ]
    
    data.forEach(({ type, title, date, content }, index) => {
        const el = createCard(type, title, date, content, data.length - index)
        container.appendChild(el)
    })
})()