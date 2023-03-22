const arr = []

const loadProducts = (url) =>{
    fetch(url)
    .than(res => res.json())
    .than(data =>{
        arr.push(data)

    })
}
loadProducts('https://fakestoreapi.com/products')