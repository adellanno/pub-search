var myApp = angular.module('myApp', []);

myApp.controller('AppCtrl', [
  '$scope',
  '$http',
  function($scope, $http) {
    console.log("hello world from controller");
  }]);
