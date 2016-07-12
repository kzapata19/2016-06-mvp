var myApp = angular.module('myApp', []);

myApp.controller('myCtrl',['$scope', '$http', function($scope, $http){
  console.log("this is coming from controller.js");

$http.get('/addressList').success(function(response){
  console.log("controller receieved data requested from server");
  $scope.addressList = response;
});

$scope.addPerson = function(){

};

}]);