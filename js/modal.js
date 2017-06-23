'use strict';

var modalUser = document.getElementById('modal-user');
var modalRol = document.getElementById('modal-rol');
var cancelButton = document.getElementById('cancel-button');
var acceptButon = document.getElementById('accept-button');
var trashUser = document.querySelectorAll('.trashUser'); //querySelectorAll para formar un array con todos los botones de borrar
var trashRol = document.querySelectorAll('.trashRol');


// Function Modal User
function showModalUser (event){ //event es para decirle a JS que hay un evento.
  modalUser.classList.toggle('hidden');
}

for (var i = 0; i < trashUser.length; i++) {
  trashUser[i].addEventListener('click', showModalUser, false);
}

// Function Modal Roles

function showModalRol (event){
  modalRol.classList.toggle('hidden');
}

for (var j = 0; j < trashRol.length; j++) {
  trashRol[j].addEventListener('click', showModalRol, false);
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
