const ws = require('nodejs-websocket')

let count = 0

const server = ws.createServer(conn => {
    count++

    conn.name = 'User ' + count

    broadcast(`${conn.name} joined`)

    conn.on('text', msg => {
        broadcast(`${conn.name}: ${msg}`)
    })

    conn.on('close', () => {
        broadcast(conn.name + ' left')
    })

    conn.on('error', () => {
        console.log('Something went wrong')
    })
})

/**
 * Send the message to all the connections
 */
function broadcast(msg) {
    server.connections.forEach(conn => {
        conn.send(msg)
    })
}

server.listen(8080, () => {
    console.log('Server is running on port 8080')
})