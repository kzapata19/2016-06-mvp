var myApp = angular.module('myApp', []);

myApp.controller('myCtrl',['$scope', '$http', function($scope, $http){
  console.log("this is coming from controller.js");

var updateList = function(){
  $http.get('/addressList')
  .success(function(response){
    console.log("controller receieved data requested from server");
    $scope.addressList = response;
    $scope.contact = ''; //clear input after fx called below
  });
};

updateList();

//receive data from input
$scope.addPerson = function(){
  //send input data to server
  $http.post('/addressList', $scope.contact)
  .success(function(response){
    updateList(); // call to refresh after the entry has been entered
  });
};

$scope.deletePerson = function(id){
  console.log(id);
};

}]);