const fs = require('fs')

const fileName = process.argv[2]

const fileBuffer = fs.readFileSync(fileName)

const fileString = fileBuffer.toString()

const fileLines = fileString.split('\n')

console.log(fileLines.length - 1)

