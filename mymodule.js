const fs = require("fs");
module.exports = function(pathName, fileExtension, callback) {
    fs.readdir(pathName, (err, files) => {
        if (err) {
            return callback(err)
        }

        let filteredFiles = []

        files.forEach(file => {
            if(file.endsWith(`.${fileExtension}`)) {
                filteredFiles.push(file)
            }
        })

        return callback(null, filteredFiles)
    })
}