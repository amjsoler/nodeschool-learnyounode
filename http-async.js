const http = require('http')

const url1 = process.argv[2]
const url2 = process.argv[3]
const url3 = process.argv[4]

let datos1 = ''
let datos2 = ''
let datos3 = ''

http.get(url1, (res) => {
    res.setEncoding('utf8')
    res.on('data', (data) => {
        datos1 = datos1 + data
    })

    res.on("end", () => {
        console.log(datos1)

        http.get(url2, (res) => {
            res.setEncoding('utf8')
            res.on('data', (data) => {
                datos2 = datos2 + data
            })

            res.on("end", () => {
                console.log(datos2)


                http.get(url3, (res) => {
                    res.setEncoding('utf8')
                    res.on('data', (data) => {
                        datos3 = datos3 + data
                    })

                    res.on("end", () => {
                        console.log(datos3)
                    })
                })
            })
        })
    })
})



