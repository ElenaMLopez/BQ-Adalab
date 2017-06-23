'use strict';

var modalUser = document.getElementById('modal-user');
var modalRol = document.getElementById('modal-rol');
var cancelButton = document.getElementById('cancel-button');
var acceptButon = document.getElementById('accept-button');
var buttonToErase = document.querySelectorAll('.trash');

function showModal (){
  modalUser.classList.toggle('hidden');
  modalRol.classList.toggle('hidden');
  for (var i = 0; i < buttonToErase.length; i++) {
    buttonToErase[i].addEventListener('click', showModal)
  }
  console.log(buttonToErase);
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
