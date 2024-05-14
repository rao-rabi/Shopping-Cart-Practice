let productListHTML = document.querySelector(".productList");
console.log(productListHTML);
let productList = [];

/*
let cartBtn = document.querySelector("#cart");
let openCart = document.querySelector("#shopping-cart");
let closeCart = document.querySelector("#closebtn"); 

cartBtn.onclick = () => {
  openCart.classList.toggle("active");
};

closeCart.onclick = () => {
  openCart.classList.remove("active");
};
*/
let addDataToHtml = () => {
  productListHTML.innerHTML = ''; 
  console.log(productList);
  if (productList.length > 0) {
    productList.forEach(product => {
      const newProduct = document.createElement("li"); console.log(newProduct);
      newProduct.classList.add("flex", "flex-col", "justify-center", "items-center", "w-[300px]", "gap-1", "bg-white", "px-4", "py-7", "rounded-md");
      
      // Use template literals for cleaner HTML structure
      newProduct.innerHTML = `
        <img class="w-60 drop-shadow-[3px_5px_10px_rgba(0,0,0,0.25)]" src="${product.image}" alt="${product.name}">
        <h3 class="text-2xl font-semibold uppercase">${product.name}</h3>
        <span class="block text-lg font-medium">${product.price}</span>
        <button class="bg-black text-white px-5 py-2 rounded-lg font-medium">ADD TO CART</button>
      `;

      productListHTML.appendChild(newProduct);
    });
  } else {
    // Handle empty product list (optional: display a message)
    console.log("No products found in the list.");
  }
};

const initApp = () => {
  fetch("/JSON/products.json")
    .then(response => response.json())
    .then(data => {
      productList = data.products;
      if (productList.length > 0) {
        addDataToHtml(data);
      } else {
        console.log("No products found in the JSON data.");
      }
    })
    .catch(error => {
      console.error("Error fetching products:", error);
    });
};



initApp();

