const socket = new WebSocket('ws://localhost:8080')
const content = document.getElementById('content')
const message = document.getElementById('message')
const button = document.getElementById('button')

socket.onopen = () => {
    console.log('Connection opened')
}

socket.onmessage = data => {
    console.log(data)
    addMessage(data.data)
}

socket.onclose = () => {
    addMessage('Connection closed')
}

socket.onerror = () => {
    addMessage('Something went wrong')
}

function addMessage(msg) {
    const div = document.createElement('div')
    div.innerText = msg
    content.appendChild(div)
}

button.onclick = () => {
    socket.send(message.value)
}