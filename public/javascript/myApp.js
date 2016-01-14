var myApp = angular.module('myApp', []);

myApp.controller('AppCtrl', [
  '$scope',
  '$http',
  function($scope, $http) {
    console.log("hello world from controller");


    var map;
    var service;
    var infowindow;

  function initialize() {

    var currentLocation = new google.maps.LatLng(51.4290249,-0.3617751); // current location set as variable

    map = new google.maps.Map(document.getElementById('map'), {
      center: currentLocation,
      zoom: 10
    });

    var request = {
      location: currentLocation,
      radius: '1000',
      query: 'pub near tw12 1hh'
    };

    service = new google.maps.places.PlacesService(map);
    service.textSearch(request, callback);

    function createMarker(place){
        var photos = place.photos;
        if (!photos) {
          return;
        }

        var marker = new google.maps.Marker({
          map: map,
          position: place.geometry.location,
          title: place.name,
          icon: photos[0].getUrl({'maxWidth': 35, 'maxHeight': 35})
        });
    }

    function callback(results, status) {
      if (status == google.maps.places.PlacesServiceStatus.OK) {
        for (var i = 0; i < results.length; i++) {
          var place = results[i];
          createMarker(results[i]);
        }
      }
    }
    // var mapCanvas = document.getElementById('map');
    // var mapOptions = {
    //  center: new google.maps.LatLng(44.5403, -78.5463),
    //  zoom: 8,
    //  mapTypeId: google.maps.MapTypeId.ROADMAP
    // }
    // var map = new google.maps.Map(mapCanvas, mapOptions);
  }

    google.maps.event.addDomListener(window, 'load', initialize);

  }]);
