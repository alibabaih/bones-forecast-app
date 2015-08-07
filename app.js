//var tb = document.getElementById("name");
//
//tb.addEventListener("keypress",
//    function(event) {
//        console.log("Pressed!");
//    });

myApp = angular.module('myApp', []);

myApp.controller('mainController', ['$scope', '$filter', '$timeout', function($scope, $filter, $timeout) {
    
    $scope.alertClick = function() {
        alert('clicked');
    };
    
    $scope.name = 'John Doe';
    
}]);