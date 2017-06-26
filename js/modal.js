'use strict';

var modalUser = document.getElementById('modal-user');
var modalRol = document.getElementById('modal-rol');
var modalProduct = document.getElementById('modal-product');
var cancelButtonUser = document.getElementById('cancel-button-user');
var acceptButonUser = document.getElementById('accept-button-user');
var cancelButtonRol = document.getElementById('cancel-button-rol');
var acceptButonRol = document.getElementById('accept-button-rol');
var trashUser = document.querySelectorAll('.trashUser');//querySelectorAll para formar un array con todos los botones de borrar
var trashRol = document.querySelectorAll('.trashRol');
var trashProduct = document.querySelectorAll('.trashProduct');
var cancelButtonProduct = document.getElementById('cancel-button-product');
var acceptButtonProduct =document.getElementById('accept-button-product');


// Function Modal User
function showModalUser(event) { //event es para decirle a JS que hay un evento.
  modalUser.classList.toggle('hidden');
}

for (var i = 0; i < trashUser.length; i++){
  trashUser[i].addEventListener('click', showModalUser, false);
}

function occultModalUser() {
  modalUser.classList.toggle('hidden');
}

function acceptEraseUser() {
  // function to connect with server;
  occultModalUser();
}

// Function Modal Roles

function showModalRol(event) {
  modalRol.classList.toggle('hidden');
}

for (var j = 0; j < trashRol.length; j++){
  trashRol[j].addEventListener('click', showModalRol, false);
}

function occultModalRol() {
  modalRol.classList.toggle('hidden');
}

function acceptEraseRol() {
  // function to connect with server;
  occultModalRol();
}


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


cancelButtonUser.addEventListener('click', occultModalUser);
acceptButonUser.addEventListener('click', acceptEraseUser);
cancelButtonRol.addEventListener('click', occultModalRol);
acceptButonRol.addEventListener('click', acceptEraseRol);
cancelButtonProduct.addEventListener('click', occultModalProduct);
acceptButtonProduct.addEventListener('click', acceptEraseProduct);
