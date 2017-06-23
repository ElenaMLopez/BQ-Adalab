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
