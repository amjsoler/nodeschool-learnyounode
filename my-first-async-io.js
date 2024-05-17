const fs = require('fs')

const fileName = process.argv[2]

let fileLines = 0

fs.readFile(fileName, 'utf8', (err, data) => {
    if (err) {
        console.error(err)
        return
    }

    fileLines = data.split('\n').length - 1

    console.log(fileLines)
})