let result = process.argv.reduce(
    (accumulator, currentValue, currentIndex) => accumulator += currentIndex > 1 ? Number(currentValue) : 0,
    0
)

console.log(result)