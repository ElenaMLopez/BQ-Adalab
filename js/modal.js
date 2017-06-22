'use strict';

var modal = document.querySelector('#modal-container');
var cancelButton = document.getElementById('cancel-button');
var acceptButon = document.getElementById('accept-button');
var buttonToErase = document.getElementById('trash');
// var imprime = document.querySelectorAll('trash');
// console.log(imprime);

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

//------------------

// var buttonToErase = document.getElementById('trash');
//
// var cancelButton = document.getElementById('cancel-button');
// var acceptButon = document.getElementById('accept-button');
//
//
// function showOrHideModal(){
//   var modal= document.getElementById('modal-container');
//   modal.classList.toggle('showModal');
// }
//
//
// function acceptErase(){
//   // function to connect with server;
//   showOrHideModal();
// }
//
// cancelButton.addEventListener('click', showOrHideModal);
// buttonToErase.addEventListener('click', showOrHideModal);
// acceptButon.addEventListener('click', acceptErase);
//
//
// // var button = document.querySelector('#botonMenu');
// //
// // function showOrHideMobileMenu(){
// //
// //   var menu = document.querySelector('#menu');
// //   menu.classList.toggle('show-menu');
// // }
// //
// // button.addEventListener('click', showOrHideMobileMenu);
