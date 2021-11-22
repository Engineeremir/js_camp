let cart = [
    { id: 1, productName: "Telefon", quantity: 1, unitPrice: 4000 },
    { id: 2, productName: "Bardak", quantity: 3, unitPrice: 30 },
    { id: 3, productName: "Kalem", quantity: 4, unitPrice: 20 },
    { id: 4, productName: "Şarj cihazı", quantity: 5, unitPrice: 100 },
    { id: 5, productName: "Kitap", quantity: 4, unitPrice: 30 },
    { id: 6, productName: "Pot", quantity: 2, unitPrice: 150 },
]

cart.map(product => console.log(product.productName))


let quantityOVerTwo = cart.filter(product => product.quantity > 2) //returns new List

console.log(quantityOVerTwo)