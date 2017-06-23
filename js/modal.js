'use strict';

var modalUser = document.getElementById('modal-user');
var modalRol = document.getElementById('modal-rol');
var cancelButton = document.getElementById('cancel-button');
var acceptButon = document.getElementById('accept-button');
var trashUser = document.querySelectorAll('.trashUser');
var trashRol = document.querySelectorAll('.trashRol');

// Function Modal User
function showModalUser (event){
  modalUser.classList.toggle('hidden');
}

for (var i = 0; i < trashUser.length; i++) {
  trashUser[i].addEventListener('click', showModalUser, false);
}

// Function Modal Roles
function showModalRol (event){
  modalRol.classList.toggle('hidden');
}

for (var i = 0; i < trashRol.length; i++) {
  trashRol[i].addEventListener('click', showModalRol, false);
}

function occultModal(){
  modalUser.classList.toggle('hidden');
  modalRol.classList.toggle('hidden');
}

function acceptErase(){
  // function to connect with server;
  occultModal();
}

cancelButton.addEventListener('click', occultModal);
acceptButon.addEventListener('click', acceptErase);
