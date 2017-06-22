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

// GESTIÓN
//Input
var selectUser = document.getElementById("selectUser");
var selectRoles = document.getElementById("selectRol");
// Label
var labelUser = document.getElementById("loadUser");
var labelRoles = document.getElementById("loadRoles");
// Div product and Map
var rolesElement = document.querySelector(".listRoles");
var userElement = document.querySelector(".listUser");
// Button
var btnUser = document.querySelector(".btn-user");

function toggleViewGestion() {
  //Si la opcion con id selectProduct (dentro del documento) >
  if (selectUser.checked == true) {
    //esta activada pone propiedad "hidden" y desactiva la del otro elemento
    userElement.classList.toggle("hidden");
    rolesElement.classList.toggle("hidden");
    titlePages.innerHTML = "Usuarios";
  } else {
    userElement.classList.toggle("hidden");
    rolesElement.classList.toggle("hidden");
    titlePages.innerHTML = "Roles";
  }
}

labelUser.addEventListener("click", toggleViewGestion);
labelRoles.addEventListener("click", toggleViewGestion);
