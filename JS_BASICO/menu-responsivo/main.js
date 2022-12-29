
document.addEventListener("DOMContentLoaded", () => {
  const navbarEmail = document.querySelector('.navbar-email');
  const desktopMenu = document.querySelector('.desktop-menu');
  const menu = document.querySelector('.menu');
  const mobileMenu = document.querySelector('.mobile-menu');
  const shoppingCart = document.querySelector('.navbar-shopping-cart');
  const shoppingCartDropdown = document.querySelector('.product-detail');
  const cardsContainer = document.querySelector('.cards-container');
  const productDetailCart = document.querySelector('.product-detail-cart');
  let menus = [desktopMenu, mobileMenu, shoppingCartDropdown, productDetailCart];

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

  const productTiles = Array.from(document.querySelectorAll('.product-card'));


  for (tile of productTiles) {
    tile.addEventListener('click', () => toggleMenus(productDetailCart));
  };

  productDetailCart
    .querySelector('.product-detail-close')
    .addEventListener('click', () => productDetailCart.classList.add('inactive'));

  navbarEmail.addEventListener('click', () => toggleMenus(desktopMenu));

  menu.addEventListener('click', () => toggleMenus(mobileMenu));

  shoppingCart.addEventListener('click', () => toggleMenus(shoppingCartDropdown));

  function toggleMenus(element) {
    for (elem of menus) {
      if (elem === element) {
        elem.classList.toggle('inactive');
      } else {
        elem.classList.add('inactive');
      }
    }
  }

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