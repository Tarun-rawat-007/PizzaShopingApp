// Connect View and Model

import productOperations from "../services/product-operations.js";

// controller ui to I/o
async function loadPizzas(){
    const pizzas=await productOperations.loadProducts();
    console.log("pizzas are ",pizzas);
    for(let pizza of pizzas){
      preparePizzaCard(pizza);
      

    }
}
loadPizzas();

/*
<div col-4>
<div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
</div>
 
*/
function addToCart(){
  console.log('Add to Cart Called...',this);
  const currentButton =this;
  const pizzaId=currentButton.getAttribute('product-id');
  console.log('Pizza Id  is ',pizzaId);
  productOperations.search(pizzaId);
  printBasket();
}
function printBasket(){
  const cartProducts=productOperations.getProductsInCart();
  const basket=document.querySelector('#basket');
  basket.innerHTML='';
  for(let product of cartProducts){
    const li=document.createElement('li');
    li.innerText=`${product.name} ${product.price}`;
    basket.appendChild(li);
  }
  
}

function preparePizzaCard(pizza){
    const outputDiv=document.querySelector('#output');
    const colDiv =document.createElement('div');
    colDiv.className='col-4';
    const cardDiv =document.createElement('div');
    cardDiv.className ='card';
    cardDiv.style="width: 18rem mx-1 ";
    colDiv.appendChild(cardDiv);
    const img=document.createElement('img');
    img.src=pizza.url;
    img.className='card-img-top';
    cardDiv.appendChild(img);
    const cardBody=document.createElement('div');
    cardBody.className='card-body';
    cardDiv.appendChild(cardBody);
    const h5=document.createElement('h5');
    h5.className='card-title';
    h5.innerText=pizza.name;
    const ptag=document.createElement('p');
    ptag.className='card-text';
    ptag.innerText=pizza.price;
    const button=document.createElement('button');
    button.setAttribute('product-id',pizza.id);
    button.addEventListener('click',addToCart);//event bind
    button.innerText='Add To Cart';
    button.className='btn btn-primary';
    cardBody.appendChild(h5);
    cardBody.appendChild(ptag);
    cardBody.appendChild(button);
    outputDiv.appendChild(colDiv);




}