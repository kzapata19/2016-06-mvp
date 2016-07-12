var myApp = angular.module('myApp', []);

myApp.controller('myCtrl',['$scope', '$http', function($scope, $http){
  console.log("this is coming from controller.js");

  entry1 = {
    name: "Dora la exploraDora",
    phoneNum: "(323) 555 -1234",
    email: "miEmail@gmail.com",
    facebook: "www.facebook.com/dora"
  };

  entry2 = {
    name: "Swiper",
    phoneNum: "(213) 555-6789",
    email: "mcSwipey@hotmail.com",
    facebook: "www.facebook.com/swipey"
  };

  var addressList = [entry1, entry2]
  $scope.addressList = addressList;
}]);