var myApp = angular.module('myApp', []);

myApp.controller('AppCtrl', [
  '$scope',
  '$http',
  function($scope, $http) {
    console.log("hello world from controller");

    var startmap = function() {

      var map;
      function initialize() {
        var center = new google.maps.LatLng(37.422, -122.084058);
        map = new google.maps.Map(document.getElementById('map'), {
          center: center,
          zoom: 13

        });
      }

      google.maps.event.addDomListener(window, 'load', initialize);
    }

    startmap();
  }]);
