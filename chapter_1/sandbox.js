products = [
    {name: "mushroom", price: 20},
    {name: "star", price: 100},
    {name: "fire flower", price: 50},
    {name: "babomb", price: 40}
]

const saleProducts = products.map((product) => {
    if(product.price > 40){
        product.price /= 2
    }
    return product;
})

console.log(saleProducts)