'use strict';

// PRODUCTOS
//Input
var selectProduct = document.getElementById("selectProduct");
var selectMap = document.getElementById("selectMap");
// Label
var labelProduct = document.getElementById("loadProduct");
var labelMap = document.getElementById("loadMap");
// Div product and Map
var productElement = document.querySelector(".dashboard");
var mapElement = document.querySelector(".box-map");
// title pages
var titlePages = document.getElementById("titlePages");
// Button
var btnProduct = document.querySelector(".btn-product");

function toggleViewProduct() {
  btnProduct.classList.toggle("hidden");
  //Si la opcion con id selectProduct (dentro del documento) >
  if (selectProduct.checked == true) {
    //esta activada pone propiedad "hidden" y desactiva la del otro elemento
    productElement.classList.toggle("hidden");
    mapElement.classList.toggle("hidden");
    titlePages.innerHTML = "Localiza la tienda más cercana";
  } else {
    productElement.classList.toggle("hidden");
    mapElement.classList.toggle("hidden");
    titlePages.innerHTML = "Productos";
  }
}

labelProduct.addEventListener("click", toggleViewProduct);
labelMap.addEventListener("click", toggleViewProduct);
labelMap.addEventListener("click", showMap);


//Function Modal Products:

function showModalProduct(event) {
  modalProduct.classList.toggle('hidden');
}

for (var k = 0; k < trashProduct.length; k++){
  trashProduct[k].addEventListener('click', showModalProduct);
}

function occultModalProduct() {
  modalProduct.classList.toggle('hiden');
}

function acceptEraseProduct() {
 //function to connect with server
  occultModalProduct();
}

cancelButtonProduct.addEventListener('click', occultModalProduct);
acceptButtonProduct.addEventListener('click', acceptEraseProduct);
