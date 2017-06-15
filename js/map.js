'use strict';

var map;

function showMap() {
  map = new google.maps.Map(document.getElementById('googleMap'), {
    zoom: 5,
    center: new google.maps.LatLng(40.3964129438718, -3.7129999999999654),
    mapTypeId: 'roadmap'
  });
  MarkerShops();
}

google.maps.event.addDomListener(window, 'load', showMap);


function MarkerShops(){
  var objJson = 'BQ-Adalab/js/bq-adalab-stores.json';
  var request = new XMLHttpRequest();
  request.withCredentials = true;
  request.open('GET', objJson, true);

  request.onload = function() {
    var showData = JSON.parse(request.responseText);
    var myIcon = new google.maps.MarkerImage("../pin.png", null, null, null, new google.maps.Size(16,16));
    for (var i = 0; i < showData.stores.length; i++) {
      var coords = showData.stores[i];
      var latLng = new google.maps.LatLng(coords.latitude, coords.longitude);
      var iconBase = 'https://maps.google.com/mapfiles/kml/shapes/';
      var marker = new google.maps.Marker({
        position: latLng,
        map: map,
        icon: myIcon
      });
      // GEvent.addListener(marker, "click", function (){
      //   marker.openInfoWindowHtml(htmlVentana);
      //   return marker;
      // });
    }
  };

  request.onerror = function() {
    console.log('Error al tratar de conectarse con el servidor');
  };

  request.send();
}
