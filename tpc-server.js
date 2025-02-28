const net = require('net');

const server = net.createServer((socket) => {
    const date = new Date();
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0')
    const day = date.getDate().toString().padStart(2, '0')
    const hours = date.getHours().toString().padStart(2, '0')
    const minutes = date.getMinutes().toString().padStart(2, '0')

    const formattedDate = `${year}-${month}-${day} ${hours}:${minutes}\n`

    socket.write(formattedDate)
    socket.end()
})
server.listen(process.argv[2])