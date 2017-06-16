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


cancelButton.addEventListener('click', occultModal);
buttonToErase.addEventListener('click', showModal);
acceptButon.addEventListener('click', acceptErase);
