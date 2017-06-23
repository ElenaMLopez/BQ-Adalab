'use strict';

var modalUser = document.getElementById('modal-user');
var modalRol = document.getElementById('modal-rol');
var cancelButtonUser = document.getElementById('cancel-button-user');
var acceptButonUser = document.getElementById('accept-button-user');
var cancelButtonRol = document.getElementById('cancel-button-rol');
var acceptButonRol = document.getElementById('accept-button-rol');
var trashUser = document.querySelectorAll('.trashUser');//querySelectorAll para formar un array con todos los botones de borrar
var trashRol = document.querySelectorAll('.trashRol');


// Function Modal User
function showModalUser (event){ //event es para decirle a JS que hay un evento.
  modalUser.classList.toggle('hidden');
}

for (var i = 0; i < trashUser.length; i++) {
  trashUser[i].addEventListener('click', showModalUser, false);
}

function occultModalUser(){
  modalUser.classList.toggle('hidden');
}

function acceptEraseUser(){
  // function to connect with server;
  occultModalUser();
}

// Function Modal Roles

function showModalRol (event){
  modalRol.classList.toggle('hidden');
}

for (var j = 0; j < trashRol.length; j++) {
  trashRol[j].addEventListener('click', showModalRol, false);
}

function occultModalRol(){
  modalRol.classList.toggle('hidden');
}

function acceptEraseRol(){
  // function to connect with server;
  occultModalRol();
}

cancelButtonUser.addEventListener('click', occultModalUser);
acceptButonUser.addEventListener('click', acceptEraseUser);
cancelButtonRol.addEventListener('click', occultModalRol);
acceptButonRol.addEventListener('click', acceptEraseRol);
