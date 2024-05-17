const mymodule = require("./mymodule")

const path = process.argv[2]
const fileExtension = process.argv[3]

mymodule(path, fileExtension, (err, result) => {
    if (err) {
        console.error(err)
    } else {
        result.forEach(file => {
            console.log(file)
        })
    }
})