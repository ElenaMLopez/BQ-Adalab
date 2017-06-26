'use strict';

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
var btnRol = document.querySelector(".hidden");

function toggleViewGestion() {
  //Si la opcion con id selectProduct (dentro del documento) >
  if (selectUser.checked == true) {
    //esta activada pone propiedad "hidden" y desactiva la del otro elemento
    userElement.classList.toggle("hidden");
    rolesElement.classList.toggle("hidden");
    titlePages.innerHTML = "Roles";
    btnUser.classList.toggle("hidden");
    btnRol.classList.toggle("hidden");
  } else {
    userElement.classList.toggle("hidden");
    rolesElement.classList.toggle("hidden");
    titlePages.innerHTML = "Usuarios";
    btnUser.classList.toggle("hidden");
    btnRol.classList.toggle("hidden");
  }
}

labelUser.addEventListener("click", toggleViewGestion);
labelRoles.addEventListener("click", toggleViewGestion);


// Functions Modals

var modalUser = document.getElementById('modal-user');
var cancelButtonUser = document.getElementById('cancel-button-user');
var acceptButonUser = document.getElementById('accept-button-user');
var trashUser = document.querySelectorAll('.trashUser');//querySelectorAll para formar un array con todos los botones de borrar
var trashProduct = document.querySelectorAll('.trashProduct');

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

cancelButtonUser.addEventListener('click', occultModalUser);
acceptButonUser.addEventListener('click', acceptEraseUser);

// Function Modal Roles

var modalRol = document.getElementById('modal-rol');
var cancelButtonRol = document.getElementById('cancel-button-rol');
var acceptButonRol = document.getElementById('accept-button-rol');
var trashRol = document.querySelectorAll('.trashRol');

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

cancelButtonRol.addEventListener('click', occultModalRol);
acceptButonRol.addEventListener('click', acceptEraseRol);
