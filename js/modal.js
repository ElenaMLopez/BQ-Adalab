'use strict';

var modalUser = document.getElementById('modal-user');
var modalRol = document.getElementById('modal-rol');
var cancelButtonUser = document.getElementById('cancel-button-user');
var acceptButonUser = document.getElementById('accept-button-user');
var cancelButtonRol = document.getElementById('cancel-button-rol');
var acceptButonRol = document.getElementById('accept-button-rol');
var trashUser = document.querySelectorAll('.trashUser');
var trashRol = document.querySelectorAll('.trashRol');

// Function Modal User
function showModalUser (event){
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

for (var i = 0; i < trashRol.length; i++) {
  trashRol[i].addEventListener('click', showModalRol, false);
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
