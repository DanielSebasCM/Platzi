
document.addEventListener("DOMContentLoaded", () => {
  const navbarEmail = document.querySelector('.navbar-email');
  const desktopMenu = document.querySelector('.desktop-menu');
  const menu = document.querySelector('.menu');
  const mobileMenu = document.querySelector('.mobile-menu');
  const shoppingCart = document.querySelector('.navbar-shopping-cart');
  const shoppingCartDropdown = document.querySelector('.product-detail');
  const cardsContainer = document.querySelector('.cards-container');
  let products = [{
    name: "Bike",
    price: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
  },
  {
    name: "Car",
    price: 12000,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
  },
  {
    name: "TV",
    price: 1200,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
  }, {
    name: "Bike",
    price: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
  },
  {
    name: "Car",
    price: 12000,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
  },
  {
    name: "TV",
    price: 1200,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
  }, {
    name: "Bike",
    price: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
  },
  {
    name: "Car",
    price: 12000,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
  },
  {
    name: "TV",
    price: 1200,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
  }, {
    name: "Bike",
    price: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
  },
  {
    name: "Car",
    price: 12000,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
  },
  {
    name: "TV",
    price: 1200,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
  }];

  displayProducts(products);

  navbarEmail.addEventListener('click', () => {
    desktopMenu.classList.toggle('inactive');
    shoppingCartDropdown.classList.add('inactive');
  });

  menu.addEventListener('click', () => {
    mobileMenu.classList.toggle('inactive');
    shoppingCartDropdown.classList.add('inactive');
  });

  shoppingCart.addEventListener('click', () => {
    shoppingCartDropdown.classList.toggle('inactive');
    mobileMenu.classList.add('inactive');
    desktopMenu.classList.add('inactive');
  });






  function displayProducts(arr) {
    for (let product of arr) {

      let productCard = document.createElement('div');
      productCard.classList.add('product-card');

      let productImg = document.createElement('img');
      productImg.setAttribute('src', product.image);

      let productInfo = document.createElement('div');
      productInfo.classList.add('product-info');

      let productDiv = document.createElement('div');

      let productPrice = document.createElement('p');
      productPrice.innerText = `$${product.price}`;

      let productName = document.createElement('p');
      productName.innerText = product.name;

      productDiv.appendChild(productPrice);
      productDiv.appendChild(productName);

      let productFigure = document.createElement('figure');

      let cartImg = document.createElement('img');
      cartImg.src = './icons/bt_add_to_cart.svg';

      productFigure.appendChild(cartImg);

      productInfo.appendChild(productDiv);
      productInfo.appendChild(productFigure);

      productCard.appendChild(productImg);
      productCard.appendChild(productInfo);

      cardsContainer.appendChild(productCard);
    }
  }

});