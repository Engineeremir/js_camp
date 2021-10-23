//REST
let showProducts = function(id, ...products) {
    console.log(id)
    console.log(products)
}

showProducts() // id=> undefined products=> liste çıkar

showProducts(10, ["Elma", "Armut", "Karpuz"]) //=> rest parametreler liste içine alınır. Array içinde array

//SPREAD

let numbers = [1, 2, 3, 4, 5]

console.log(Math.max(...numbers)) //=>  Liste içinde gönderilemez

console.log(...
    "ABC", "D", ...
    "EFG", "H")

//DESTRUCTURING => ARRAY DEĞERLERİNİ FARKLI DEĞİŞKENLERE ATAMA

let populations = [10000, 20000, 30000, [40000, 100000]]

let [small, medium, high, [veryHigh, maximum]] = populations

console.log(small)
console.log(medium)
console.log(high)
console.log(veryHigh)
console.log(maximum)

function someFunction([small1], number) {
    console.log(small1)
}

someFunction(populations)


let category = { id: 1, name: "emir" }

let { id, name } = category

console.log(id, name)