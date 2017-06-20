'use strict';

var modal = document.getElementById('modal-container');
var cancelButton = document.getElementById('cancel-button');
var acceptButon = document.getElementById('accept-button');
var buttonToErase = document.getElementById('trash');

function showModal (){
  modal.style.display = 'inline';
}
function occultModal(){
  modal.style.display = 'none';
}

function acceptErase(){
  // function to connect with server;
  occultModal();
}

<<<<<<< HEAD
=======

>>>>>>> e7b60f5bd1629923bd73cfd5924d9f8e1e5c404d
cancelButton.addEventListener('click', occultModal);
buttonToErase.addEventListener('click', showModal);
acceptButon.addEventListener('click', acceptErase);
