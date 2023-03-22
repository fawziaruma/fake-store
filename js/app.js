const arr =[]
const loadProducts =(url) =>{
    fetch(url)
            .then((res)=>res.json())
            .then((data) => {
                arr.push(data)
                showProduct(data)
            } )
}


loadProducts('https://fakestoreapi.com/products')
// ...........show all product...............//
const showProduct = (products) =>{
    // setInnerText('total-Product' , products.length );
    document.getElementById('all-products').innerHTML =' ';
    const allProducts = products.slice(0, 10).map(pd => pd );
    for(const product of allProducts ){
       const img = product.image
       const div =document.createElement('div');
       div.classList.add('product')
       div.innerHTML =  `
       
       <div class="single-product" >
         <div> 
            <img class="product-img" src=${img} > </img>
         </div>
         <h3> ${product.title} </h3>
         <p> ${product.category} </p>
        </div>
       
       `

       document.getElementById('total-product').appendChild(div)
        
    }


}


// search by cetorgy

document.getElementById("search-btn").addEventListener('click', function(){
    const inputField = document.getElementById('input-value').value 
    const searchedProduct = arr[0].find( (p) => p.category.startWith(`${inputField}`) );
    showProduct(searchedProduct)
})