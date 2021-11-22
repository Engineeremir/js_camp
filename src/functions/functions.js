function addToCart(quantity, productName = "telefon") {
    console.log(productName + " Sepete Eklendi. " + quantity + " adet")
}

addToCart(10)
addToCart(1, "bilgisayar")
addToCart(2, "monitör")

let sayHello = () => {
    console.log("Hello world")
}