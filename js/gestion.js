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

function toggleViewGestion() {
  //Si la opcion con id selectProduct (dentro del documento) >
  if (selectUser.checked == true) {
    //esta activada pone propiedad "hidden" y desactiva la del otro elemento
    userElement.classList.toggle("hidden");
    rolesElement.classList.toggle("hidden");
    titlePages.innerHTML = "Roles";
    btnUser.innerHTML = "Nuevo rol"
    btnUser.classList.remove("btn-user");
    btnUser.classList.add("btn-rol");
  } else {
    userElement.classList.toggle("hidden");
    rolesElement.classList.toggle("hidden");
    titlePages.innerHTML = "Usuarios";
    btnUser.innerHTML = "Nuevo usuario"
    btnUser.classList.remove("btn-rol");
    btnUser.classList.add("btn-user");
  }
}

labelUser.addEventListener("click", toggleViewGestion);
labelRoles.addEventListener("click", toggleViewGestion);
