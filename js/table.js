'use strict';

var listUser = document.getElementById("listUser";
var listRoles = document.getElementById("listRoles");

function genera_tabla() {
  var objtJson = '/js/prueba.json';
  var request = new XMLHttpRequest();
  request.withCredentials = true;
  request.open('GET', objtJson, true);

  request.onload = function() {
    var showList = JSON.parse(request.responseText);
    var hilera = document.createElement("tr");
    // Crea las celdas
    for (var i = 0; i < showList.length; i++) {
      // Crea las hileras de la tabla
      var data = showList[i];
      for (var j = 0; j < 2; j++) {
        var celda = document.createElement("td");
        celda.appendChild(textoCelda);
        hilera.appendChild(celda);
      }
      return celda = data[j];
      listUser.appendChild(hilera);
    }
  }
