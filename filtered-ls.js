const fs = require('fs')

const path = process.argv[2]
const fileExtension = process.argv[3]

fs.readdir(path, (err, files) => {
    if (err) {
        console.error(err)
        return
    }

    files.forEach(file => {
        if (file.endsWith(`.${fileExtension}`)) {
        console.log(file)
        }
    })
})
