var shoppingCart = {
    Shampoo: 100,
    Soap: 30,
    Towel: 200,
    Water: 50
}
let total = Object.values(shoppingCart).reduce((sum, e) => {
    sum += e
    return sum
}, 0)
console.log(total)
