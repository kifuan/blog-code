class BookBuilder {
    name = ''
    author = ''
    price = 0

    withName(name) {
        this.name = name
        return this
    }

    withPrice(price) {
        if (price < 0) {
            throw new RangeError('price must be positive number')
        }
        this.price = price
        return this
    }

    withAuthor(author) {
        this.author = author
        return this
    }

    build() {
        const { name, price, author } = this
        return { name, price, author }
    }
}

class ShopBookBuilder extends BookBuilder {
    withPrice(price) {
        return super.withPrice(price * 1.5)
    }
}

function buildBook(builder) {
    return builder
        .withAuthor('Author')
        .withName('Name')
        .withPrice(50)
        .build()
}

const book1 = buildBook(new BookBuilder())
console.log(book1)
// { name: 'Name', price: 50, author: 'Author' }

const book2 = buildBook(new ShopBookBuilder())
console.log(book2)
// { name: 'Name', price: 75, author: 'Author' }


function ajax({ method, url, success }) {
    const xhr = new XMLHttpRequest()
    xhr.open(method, url)
    xhr.send()

    xhr.onreadystatechange = () => {
        success(xhr.response)
    }
}

ajax({
    method: 'GET',
    url: 'https://www.baidu.com',
    success: data => {
        console.log(data)
    }
})
