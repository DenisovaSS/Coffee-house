//products on the menu page
// import products from "./products.json" assert { type: "json" };
// console.log(products);
const products = [
  {
    name: 'Irish coffee',
    description:
      'Fragrant black coffee with Jameson Irish whiskey and whipped milk',
    price: '7.00',
    category: 'coffee',
    link: 'img/menu/Irish_coffee.jpg',
    sizes: {
      s: {
        size: '200 ml',
        'add-price': '0.00',
      },
      m: {
        size: '300 ml',
        'add-price': '0.50',
      },
      l: {
        size: '400 ml',
        'add-price': '1.00',
      },
    },
    additives: [
      {
        name: 'Sugar',
        'add-price': '0.50',
      },
      {
        name: 'Cinnamon',
        'add-price': '0.50',
      },
      {
        name: 'Syrup',
        'add-price': '0.50',
      },
    ],
  },

  {
    name: 'Kahlua coffee',
    description:
      'Classic coffee with milk and Kahlua liqueur under a cap of frothed milk',
    price: '7.00',
    category: 'coffee',
    link: 'img/menu/coffee-2.jpg',
    sizes: {
      s: {
        size: '200 ml',
        'add-price': '0.00',
      },
      m: {
        size: '300 ml',
        'add-price': '0.50',
      },
      l: {
        size: '400 ml',
        'add-price': '1.00',
      },
    },
    additives: [
      {
        name: 'Sugar',
        'add-price': '0.50',
      },
      {
        name: 'Cinnamon',
        'add-price': '0.50',
      },
      {
        name: 'Syrup',
        'add-price': '0.50',
      },
    ],
  },

  {
    name: 'Honey raf',
    description: 'Espresso with frothed milk, cream and aromatic honey',
    price: '5.50',
    category: 'coffee',
    link: 'img/menu/coffee-3.jpg',
    sizes: {
      s: {
        size: '200 ml',
        'add-price': '0.00',
      },
      m: {
        size: '300 ml',
        'add-price': '0.50',
      },
      l: {
        size: '400 ml',
        'add-price': '1.00',
      },
    },
    additives: [
      {
        name: 'Sugar',
        'add-price': '0.50',
      },
      {
        name: 'Cinnamon',
        'add-price': '0.50',
      },
      {
        name: 'Syrup',
        'add-price': '0.50',
      },
    ],
  },

  {
    name: 'Ice cappuccino',
    description: 'Cappuccino with soft thick foam in summer version with ice',
    price: '5.00',
    category: 'coffee',
    link: 'img/menu/coffee-4.jpg',
    sizes: {
      s: {
        size: '200 ml',
        'add-price': '0.00',
      },
      m: {
        size: '300 ml',
        'add-price': '0.50',
      },
      l: {
        size: '400 ml',
        'add-price': '1.00',
      },
    },
    additives: [
      {
        name: 'Sugar',
        'add-price': '0.50',
      },
      {
        name: 'Cinnamon',
        'add-price': '0.50',
      },
      {
        name: 'Syrup',
        'add-price': '0.50',
      },
    ],
  },

  {
    name: 'Espresso',
    description: 'Classic black coffee',
    price: '4.50',
    category: 'coffee',
    link: 'img/menu/coffee-5.jpg',
    sizes: {
      s: {
        size: '200 ml',
        'add-price': '0.00',
      },
      m: {
        size: '300 ml',
        'add-price': '0.50',
      },
      l: {
        size: '400 ml',
        'add-price': '1.00',
      },
    },
    additives: [
      {
        name: 'Sugar',
        'add-price': '0.50',
      },
      {
        name: 'Cinnamon',
        'add-price': '0.50',
      },
      {
        name: 'Syrup',
        'add-price': '0.50',
      },
    ],
  },

  {
    name: 'Latte',
    description:
      'Espresso coffee with the addition of steamed milk and dense milk foam',
    price: '5.50',
    category: 'coffee',
    link: 'img/menu/coffee-6.jpg',
    sizes: {
      s: {
        size: '200 ml',
        'add-price': '0.00',
      },
      m: {
        size: '300 ml',
        'add-price': '0.50',
      },
      l: {
        size: '400 ml',
        'add-price': '1.00',
      },
    },
    additives: [
      {
        name: 'Sugar',
        'add-price': '0.50',
      },
      {
        name: 'Cinnamon',
        'add-price': '0.50',
      },
      {
        name: 'Syrup',
        'add-price': '0.50',
      },
    ],
  },

  {
    name: 'Latte macchiato',
    description: 'Espresso with frothed milk and chocolate',
    price: '5.50',
    category: 'coffee',
    link: 'img/menu/coffee-7.jpg',
    sizes: {
      s: {
        size: '200 ml',
        'add-price': '0.00',
      },
      m: {
        size: '300 ml',
        'add-price': '0.50',
      },
      l: {
        size: '400 ml',
        'add-price': '1.00',
      },
    },
    additives: [
      {
        name: 'Sugar',
        'add-price': '0.50',
      },
      {
        name: 'Cinnamon',
        'add-price': '0.50',
      },
      {
        name: 'Syrup',
        'add-price': '0.50',
      },
    ],
  },

  {
    name: 'Coffee with cognac',
    description: 'Fragrant black coffee with cognac and whipped cream',
    price: '6.50',
    category: 'coffee',
    link: 'img/menu/coffee-8.jpg',
    sizes: {
      s: {
        size: '200 ml',
        'add-price': '0.00',
      },
      m: {
        size: '300 ml',
        'add-price': '0.50',
      },
      l: {
        size: '400 ml',
        'add-price': '1.00',
      },
    },
    additives: [
      {
        name: 'Sugar',
        'add-price': '0.50',
      },
      {
        name: 'Cinnamon',
        'add-price': '0.50',
      },
      {
        name: 'Syrup',
        'add-price': '0.50',
      },
    ],
  },

  {
    name: 'Moroccan',
    description:
      'Fragrant black tea with the addition of tangerine, cinnamon, honey, lemon and mint',
    price: '4.50',
    category: 'tea',
    link: 'img/menu/tea-1.png',
    sizes: {
      s: {
        size: '200 ml',
        'add-price': '0.00',
      },
      m: {
        size: '300 ml',
        'add-price': '0.50',
      },
      l: {
        size: '400 ml',
        'add-price': '1.00',
      },
    },
    additives: [
      {
        name: 'Sugar',
        'add-price': '0.50',
      },
      {
        name: 'Lemon',
        'add-price': '0.50',
      },
      {
        name: 'Syrup',
        'add-price': '0.50',
      },
    ],
  },

  {
    name: 'Ginger',
    description: 'Original black tea with fresh ginger, lemon and honey',
    price: '5.00',
    category: 'tea',
    link: 'img/menu/tea-2.png',
    sizes: {
      s: {
        size: '200 ml',
        'add-price': '0.00',
      },
      m: {
        size: '300 ml',
        'add-price': '0.50',
      },
      l: {
        size: '400 ml',
        'add-price': '1.00',
      },
    },
    additives: [
      {
        name: 'Sugar',
        'add-price': '0.50',
      },
      {
        name: 'Lemon',
        'add-price': '0.50',
      },
      {
        name: 'Syrup',
        'add-price': '0.50',
      },
    ],
  },

  {
    name: 'Cranberry',
    description: 'Invigorating black tea with cranberry and honey',
    price: '5.00',
    category: 'tea',
    link: 'img/menu/tea-3.png',
    sizes: {
      s: {
        size: '200 ml',
        'add-price': '0.00',
      },
      m: {
        size: '300 ml',
        'add-price': '0.50',
      },
      l: {
        size: '400 ml',
        'add-price': '1.00',
      },
    },
    additives: [
      {
        name: 'Sugar',
        'add-price': '0.50',
      },
      {
        name: 'Lemon',
        'add-price': '0.50',
      },
      {
        name: 'Syrup',
        'add-price': '0.50',
      },
    ],
  },

  {
    name: 'Sea buckthorn',
    description:
      'Toning sweet black tea with sea buckthorn, fresh thyme and cinnamon',
    price: '5.50',
    category: 'tea',
    link: 'img/menu/tea-4.png',
    sizes: {
      s: {
        size: '200 ml',
        'add-price': '0.00',
      },
      m: {
        size: '300 ml',
        'add-price': '0.50',
      },
      l: {
        size: '400 ml',
        'add-price': '1.00',
      },
    },
    additives: [
      {
        name: 'Sugar',
        'add-price': '0.50',
      },
      {
        name: 'Lemon',
        'add-price': '0.50',
      },
      {
        name: 'Syrup',
        'add-price': '0.50',
      },
    ],
  },

  {
    name: 'Marble cheesecake',
    description:
      'Philadelphia cheese with lemon zest on a light sponge cake and red currant jam',
    price: '3.50',
    category: 'dessert',
    link: 'img/menu/dessert-1.png',
    sizes: {
      s: {
        size: '50 g',
        'add-price': '0.00',
      },
      m: {
        size: '100 g',
        'add-price': '0.50',
      },
      l: {
        size: '200 g',
        'add-price': '1.00',
      },
    },
    additives: [
      {
        name: 'Berries',
        'add-price': '0.50',
      },
      {
        name: 'Nuts',
        'add-price': '0.50',
      },
      {
        name: 'Jam',
        'add-price': '0.50',
      },
    ],
  },

  {
    name: 'Red velvet',
    description: 'Layer cake with cream cheese frosting',
    price: '4.00',
    category: 'dessert',
    link: 'img/menu/dessert-2.png',
    sizes: {
      s: {
        size: '50 g',
        'add-price': '0.00',
      },
      m: {
        size: '100 g',
        'add-price': '0.50',
      },
      l: {
        size: '200 g',
        'add-price': '1.00',
      },
    },
    additives: [
      {
        name: 'Berries',
        'add-price': '0.50',
      },
      {
        name: 'Nuts',
        'add-price': '0.50',
      },
      {
        name: 'Jam',
        'add-price': '0.50',
      },
    ],
  },

  {
    name: 'Cheesecakes',
    description:
      'Soft cottage cheese pancakes with sour cream and fresh berries and sprinkled with powdered sugar',
    price: '4.50',
    category: 'dessert',
    link: 'img/menu/dessert-3.png',
    sizes: {
      s: {
        size: '50 g',
        'add-price': '0.00',
      },
      m: {
        size: '100 g',
        'add-price': '0.50',
      },
      l: {
        size: '200 g',
        'add-price': '1.00',
      },
    },
    additives: [
      {
        name: 'Berries',
        'add-price': '0.50',
      },
      {
        name: 'Nuts',
        'add-price': '0.50',
      },
      {
        name: 'Jam',
        'add-price': '0.50',
      },
    ],
  },

  {
    name: 'Creme brulee',
    description:
      'Delicate creamy dessert in a caramel basket with wild berries',
    price: '4.00',
    category: 'dessert',
    link: 'img/menu/dessert-4.png',
    sizes: {
      s: {
        size: '50 g',
        'add-price': '0.00',
      },
      m: {
        size: '100 g',
        'add-price': '0.50',
      },
      l: {
        size: '200 g',
        'add-price': '1.00',
      },
    },
    additives: [
      {
        name: 'Berries',
        'add-price': '0.50',
      },
      {
        name: 'Nuts',
        'add-price': '0.50',
      },
      {
        name: 'Jam',
        'add-price': '0.50',
      },
    ],
  },

  {
    name: 'Pancakes',
    description: 'Tender pancakes with strawberry jam and fresh strawberries',
    price: '4.50',
    category: 'dessert',
    link: 'img/menu/dessert-5.png',
    sizes: {
      s: {
        size: '50 g',
        'add-price': '0.00',
      },
      m: {
        size: '100 g',
        'add-price': '0.50',
      },
      l: {
        size: '200 g',
        'add-price': '1.00',
      },
    },
    additives: [
      {
        name: 'Berries',
        'add-price': '0.50',
      },
      {
        name: 'Nuts',
        'add-price': '0.50',
      },
      {
        name: 'Jam',
        'add-price': '0.50',
      },
    ],
  },

  {
    name: 'Honey cake',
    description: 'Classic honey cake with delicate custard',
    price: '4.50',
    category: 'dessert',
    link: 'img/menu/dessert-6.png',
    sizes: {
      s: {
        size: '50 g',
        'add-price': '0.00',
      },
      m: {
        size: '100 g',
        'add-price': '0.50',
      },
      l: {
        size: '200 g',
        'add-price': '1.00',
      },
    },
    additives: [
      {
        name: 'Berries',
        'add-price': '0.50',
      },
      {
        name: 'Nuts',
        'add-price': '0.50',
      },
      {
        name: 'Jam',
        'add-price': '0.50',
      },
    ],
  },

  {
    name: 'Chocolate cake',
    description: 'Cake with hot chocolate filling and nuts with dried apricots',
    price: '5.50',
    category: 'dessert',
    link: 'img/menu/dessert-7.png',
    sizes: {
      s: {
        size: '50 g',
        'add-price': '0.00',
      },
      m: {
        size: '100 g',
        'add-price': '0.50',
      },
      l: {
        size: '200 g',
        'add-price': '1.00',
      },
    },
    additives: [
      {
        name: 'Berries',
        'add-price': '0.50',
      },
      {
        name: 'Nuts',
        'add-price': '0.50',
      },
      {
        name: 'Jam',
        'add-price': '0.50',
      },
    ],
  },

  {
    name: 'Black forest',
    description:
      'A combination of thin sponge cake with cherry jam and light chocolate mousse',
    price: '6.50',
    category: 'dessert',
    link: 'img/menu/dessert-8.png',
    sizes: {
      s: {
        size: '50 g',
        'add-price': '0.00',
      },
      m: {
        size: '100 g',
        'add-price': '0.50',
      },
      l: {
        size: '200 g',
        'add-price': '1.00',
      },
    },
    additives: [
      {
        name: 'Berries',
        'add-price': '0.50',
      },
      {
        name: 'Nuts',
        'add-price': '0.50',
      },
      {
        name: 'Jam',
        'add-price': '0.50',
      },
    ],
  },
];

// const array = products.filter((item) => item.category === "coffee");
// console.log(array);
const btnCoffe = document.querySelector('.menu_as_btn_coffe'),
  btnTea = document.querySelector('.menu_as_btn_tea'),
  btnDessert = document.querySelector('.menu_as_btn_dessert');
const menuCoffe = document.querySelector('.menu_as_wrapper_coffe'),
  menuTea = document.querySelector('.menu_as_wrapper_tea'),
  menuDessert = document.querySelector('.menu_as_wrapper_dessert');
const allbtns = document.querySelectorAll('.menu_as_btn');
const allAssor = document.querySelectorAll('.wrapper_assortiment');
const buttonRefresh = document.querySelector('.menu_as_card_refresh');
const modalImg = document.querySelector('.modal_img1');
const menuAss = document.querySelectorAll('.menu_as_card');
const modalBlock = document.querySelector('.modals');
const closeBtnModal = document.querySelector('.modal_close');

let price;
//events in ckick in products
menuAss.forEach((item) => {
  item.onclick = openPopUp;
});
//Event listener close popUp in button
closeBtnModal.addEventListener('click', closePopUp);
//Event listener for press avoid popUp
modalBlock.addEventListener('click', (event) => {
  if (event.target === modalBlock) {
    closePopUp();
  }
});
function openPopUp(event) {
  const nameProduct = event.currentTarget.getAttribute('data_name');
  const array = products.filter((item) => item.name === nameProduct);
  modalBlock.classList.add('modals_active');
  body.classList.add('modal-open');
  // console.log(array[0]);
  picturesCreate(array[0]);
  createText(array[0]);
  createBtns(array[0]);
  listenBtn(array[0]);
}

function picturesCreate(p) {
  modalImg.innerHTML = '';
  const img = `
  <img src=${p.link} alt="${p.name}">
  `;
  modalImg.insertAdjacentHTML('afterbegin', img);
}
function createText(item) {
  document.querySelector('.modal_title').textContent = item.name;
  document.querySelector('.modal_subtitle').textContent = item.description;
  price = document.querySelector(
    '.modal_total_price'
  ).textContent = `$${item.price}`;
}

function createBtns(item) {
  document.querySelector('.modal_btns_size').innerHTML = `
              <button class="modal_btn_size modal_btn_s modal_btn_active"><span class="modal_circle">S</span> ${item.sizes.s.size}</button>
              <button  class="modal_btn_size modal_btn_m"><span class="modal_circle">M</span>${item.sizes.m.size}</button>
              <button class="modal_btn_size modal_btn_l"><span class="modal_circle">L</span>${item.sizes.l.size}</button>
  `;
  document.querySelector('.modal_btns_additives').innerHTML = `
              <button class="modal_btn_additives modal_btn_1"><span class="modal_circle">1</span>${item.additives[0].name}</button>
              <button class="modal_btn_additives modal_btn_2"><span class="modal_circle">2</span>${item.additives[1].name}</button>
              <button class="modal_btn_additives modal_btn_3"><span class="modal_circle">3</span>${item.additives[2].name}</button>
  `;
}
// console.log(price);
function listenBtn(item) {
  const modalBtn1 = document.querySelector('.modal_btn_1'),
    modalBtn2 = document.querySelector('.modal_btn_2'),
    modalBtn3 = document.querySelector('.modal_btn_3'),
    modalBtnAdditives = document.querySelector('.modal_btn_additives');
  const modalBtnM = document.querySelector('.modal_btn_m'),
    modalBtnS = document.querySelector('.modal_btn_s'),
    modalBtnSize = document.querySelectorAll('.modal_btn_size'),
    modalBtnL = document.querySelector('.modal_btn_l');
  let add1 = 0,
    add = 0,
    add2 = 0,
    add3 = 0,
    cupPrice = parseFloat(item.price),
    currentPrice = cupPrice + add;

  /// event for buttons size in modal popUp
  modalBtnM.addEventListener('click', activeBtnM);
  function activeBtnM() {
    clearClassInBtn();
    cupPrice = parseFloat(item.sizes.m['add-price']) + parseFloat(item.price);
    currentPrice = cupPrice + add;
    price = document.querySelector(
      '.modal_total_price'
    ).textContent = `$${currentPrice.toFixed(2)}`;
    modalBtnM.classList.add('modal_btn_active');
  }
  modalBtnL.addEventListener('click', activeBtnL);
  function activeBtnL() {
    clearClassInBtn();
    cupPrice = parseFloat(item.sizes.l['add-price']) + parseFloat(item.price);
    currentPrice = cupPrice + add;
    price = document.querySelector(
      '.modal_total_price'
    ).textContent = `$${currentPrice.toFixed(2)}`;
    modalBtnL.classList.add('modal_btn_active');
  }
  modalBtnS.addEventListener('click', activeBtnS);
  function activeBtnS() {
    clearClassInBtn();
    cupPrice = parseFloat(item.sizes.s['add-price']) + parseFloat(item.price);
    currentPrice = cupPrice + add;
    price = document.querySelector(
      '.modal_total_price'
    ).textContent = `$${currentPrice.toFixed(2)}`;
    modalBtnS.classList.add('modal_btn_active');
  }
  function clearClassInBtn() {
    modalBtnSize.forEach((el) => el.classList.remove('modal_btn_active'));
  }
  /// event for buttons Additives in modal popUp
  modalBtn1.addEventListener('click', activeBtn1);
  function activeBtn1() {
    if (add1 === 0) {
      add1 = parseFloat(item.additives[0]['add-price']);
      add = add + add1;
    } else {
      add = add - add1;
      add1 = 0;
    }
    currentPrice = cupPrice + add;
    price = document.querySelector(
      '.modal_total_price'
    ).textContent = `$${currentPrice.toFixed(2)}`;
    modalBtn1.classList.toggle('modal_btn_active');
  }
  modalBtn2.addEventListener('click', activeBtn2);
  function activeBtn2() {
    if (add2 === 0) {
      add2 = parseFloat(item.additives[1]['add-price']);
      add = add + add2;
    } else {
      add = add - add2;
      add2 = 0;
    }
    currentPrice = cupPrice + add;
    price = document.querySelector(
      '.modal_total_price'
    ).textContent = `$${currentPrice.toFixed(2)}`;
    modalBtn2.classList.toggle('modal_btn_active');
  }
  modalBtn3.addEventListener('click', activeBtn3);
  function activeBtn3() {
    if (add3 === 0) {
      add3 = parseFloat(item.additives[2]['add-price']);
      add = add + add3;
    } else {
      add = add - add3;
      add3 = 0;
    }
    currentPrice = cupPrice + add;
    price = document.querySelector(
      '.modal_total_price'
    ).textContent = `$${currentPrice.toFixed(2)}`;
    modalBtn3.classList.toggle('modal_btn_active');
  }
}
function closePopUp() {
  modalBlock.classList.remove('modals_active');
  body.classList.remove('modal-open');
}
///2. Categories of products on the menu page
//buttons im menu and assortiment
function clearClassLIst() {
  allbtns.forEach((el) => el.classList.remove('menu_as_btn_active'));
  allAssor.forEach((el) => el.classList.remove('menu_as_wrapper_active'));
}
btnCoffe.addEventListener('click', activeBtnCofee);

function activeBtnCofee() {
  clearClassLIst();
  btnCoffe.classList.add('menu_as_btn_active');
  menuCoffe.classList.add('menu_as_wrapper_active');
  hideREfresh();
}
btnTea.addEventListener('click', activeBtnTea);

function activeBtnTea() {
  clearClassLIst();
  btnTea.classList.add('menu_as_btn_active');
  menuTea.classList.add('menu_as_wrapper_active');
  hideREfresh();
}
btnDessert.addEventListener('click', activeBtnDessert);

function activeBtnDessert() {
  clearClassLIst();
  btnDessert.classList.add('menu_as_btn_active');
  menuDessert.classList.add('menu_as_wrapper_active');
  hideREfresh();
}

//visible and button refresh
buttonRefresh.addEventListener('click', viewCards);

function viewCards() {
  let activeSection = document.querySelector('.menu_as_wrapper_active');
  for (let i = 4; i < activeSection.children.length; i++) {
    activeSection.children[i].classList.add('visible');
  }
  hideREfresh();
}
function hideREfresh() {
  buttonRefresh.classList.remove('d-none');
  if (
    document.querySelector('.menu_as_wrapper_active').children.length ==
    document.querySelectorAll('.menu_as_wrapper_active .visible').length
  ) {
    buttonRefresh.classList.add('d-none');
  }
}
//if customer resize window
addEventListener('resize', () => {
  let activeSection = document.querySelector('.menu_as_wrapper_active');
  for (let i = 4; i < activeSection.children.length; i++) {
    activeSection.children[i].classList.remove('visible');
  }
  buttonRefresh.classList.remove('d-none');
});
