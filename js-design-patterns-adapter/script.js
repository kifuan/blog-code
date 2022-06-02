const googleMap = {
    show() {
        console.log('Shows google map')
    }
}

const baiduMap = {
    display() {
        console.log('Displays baidu map')
    }
}

const baiduMapAdapter = {
    show() {
        baiduMap.display()
    }
}

function showMap(map) {
    map.show()
}

showMap(googleMap)
// Shows google map

showMap(baiduMapAdapter)
// Displays baidu map

function bookAdapter(book) {
    return {
        name: book[0],
        author: book[1],
        price: book[2]
    }
}

const book = bookAdapter(['BookName', 'BookAuthor', 50])
console.log(book)
// { name: 'BookName', author: 'BookAuthor', price: 50 }