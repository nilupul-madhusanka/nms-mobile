const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "Samsung Galaxy S23 Ultra 5G",
    price: 1099,
    colors: [
      {
        code: "green",
        img: "./img/samsung2.png",
      },
      {
        code: "lightblue",
        img: "./img/samsung4.png",
      },
    ],
  },
  {
    id: 2,
    title: "Apple Iphone 15 Pro Max",
    price: 1399,
    colors: [
      {
        code: "blue",
        img: "./img/apple2.png",
      },
      {
        code: "gray",
        img: "./img/apple4.png",
      },
    ],
  },
  {
    id: 3,
    title: "Google Pixel 8 Pro",
    price: 999,
    colors: [
      {
        code: "blue",
        img: "./img/google5.png",
      },
      {
        code: "orange",
        img: "./img/google6.png",
      },
    ],
  },
  {
    id: 4,
    title: "Xiaomi 14 Pro",
    price: 1199,
    colors: [
      {
        code: "darkgreen",
        img: "./img/xiomi2.png",
      },
      {
        code: "gray",
        img: "./img/xiomi4.png",
      },
    ],
  },
  {
    id: 5,
    title: "Huawei Mate 60 Pro",
    price: 1299,
    colors: [
      {
        code: "purple",
        img: "./img/huawei2.jpg",
      },
      {
        code: "darkgray",
        img: "./img/huawei3.jpg",
      },
    ],
  },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    //change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    //change the choosen product
    choosenProduct = products[index];

    //change texts of currentProduct
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "$" + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;

    //assing new colors
    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});

currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});

currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});
