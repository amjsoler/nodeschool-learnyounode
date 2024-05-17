const http = require('http')

const url = process.argv[2]

let datos = ''

http.get(url, (res) => {
    res.setEncoding('utf8')
    res.on('data', (data) => {
        datos = datos + data
    })

    res.on("end", () => {
        console.log(datos.length)
        console.log(datos)
    })
})

