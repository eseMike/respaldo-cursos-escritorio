// Generals 
const body = document.querySelector('body');

const email = document.querySelector('.navbar-email');
const deskMenu = document.querySelector('.desktop-menu');

// mobile menu 
const burguer = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

// Car Shoping 
const shoppingCarContainer = document.querySelector('#shoppingCarContainer');
const carIcon = document.querySelector('#carIcon');


const cardsContainer = document.querySelector('.cards-container')


// eventlisteners 

// body.addEventListener('click', () => {
//     shoppingCarContainer.classList.add('inactive');
// })


email.addEventListener('click', () => {
    const isProductDetailClosed = shoppingCarContainer.classList.contains('inactive');
    if (!isProductDetailClosed) {
        shoppingCarContainer.classList.add('inactive')
    }

    deskMenu.classList.toggle('inactive');
})

burguer.addEventListener('click', () => {

    const isProductDetailClosed = shoppingCarContainer.classList.contains('inactive');

    if (!isProductDetailClosed) {
        shoppingCarContainer.classList.add('inactive')
    }
    mobileMenu.classList.toggle('inactive');

})

carIcon.addEventListener('click', () => {

    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');


    if (!isMobileMenuClosed) {
        mobileMenu.classList.add('inactive')
    }

    shoppingCarContainer.classList.toggle('inactive');


})

// arrays 
const productList = [];

productList.push({
    name: 'Bike',
    price: 120,
    img: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

productList.push({
    name: 'Pantalla',
    price: 4221,
    img: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

productList.push({
    name: 'Laptop',
    price: 12312,
    img: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});


// <div class="product-card">
//         <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
//         <div class="product-info">
//             <div>
//                 <p>$120,00</p>
//                 <p>Bike</p>
//             </div>
//             <figure>
//                 <img src="./icons/bt_add_to_cart.svg" alt="">
//             </figure>
//         </div>
//     </div> 



function renderProducts(arr) {
    for (const product of arr) {
        const productCard = document.createElement('DIV');
        productCard.classList.add('product-card');

        const imgCard = document.createElement('IMG');
        imgCard.setAttribute('src', product.img);

        const productInfo = document.createElement('DIV');
        productInfo.classList.add('product-info');


        const productInfoDiv = document.createElement('DIV');
        const productPrice = document.createElement('P');
        productPrice.innerHTML = `$ ${productList.price}`;
        const productName = document.createElement('P');
        productName.innerText = `${productList.name}`;

        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);

        const productInfoFigure = document.createElement('FIGURE');
        const productImgCard = document.createElement('IMG');
        productImgCard.setAttribute('src', './icons/bt_add_to_cart.svg')

        productInfoFigure.appendChild(productImgCard);

        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure)

        productCard.appendChild(imgCard);
        productCard.appendChild(productInfo);


        cardsContainer.appendChild(productCard);
    }
}

renderProducts(productList);