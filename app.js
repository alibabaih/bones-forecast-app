//var tb = document.getElementById("name");
//
//tb.addEventListener("keypress",
//    function(event) {
//        console.log("Pressed!");
//    });

myApp = angular.module('myApp', []);

myApp.controller('mainController', ['$scope', '$filter', '$timeout', function($scope, $filter, $timeout) {
    
    $scope.handle = '';
    
    $scope.lowerCaseHandle = function() {
        return $filter('lowercase')($scope.handle);
    };
    
    $scope.characters = 5;
    
    $scope.rules = [
        {rulename: "Must be 5 characters"},
        {rulename: "Must not be used elsewhere"},
        {rulename: "Must be cool"}
    ];
    
    console.log($scope.rules);
    
}]);