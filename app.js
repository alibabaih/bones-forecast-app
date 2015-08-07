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
    
    $scope.$watch('handle', function(newValue, oldValue) {
        console.info('Changed!');
        console.log('Old value: ' + oldValue);
        console.log('New value: ' + newValue);
    });
    
    setTimeout(function() {
        //$apply is used to execute an expression in angular from outside of the angular framework
        $scope.$apply(function() {
            $scope.handle = 'newHandle';
            console.log('Scope changed');
        });
        
    }, 3000);
    
    // OR //
    
//    $timeout(function() {
//        //$apply is used to execute an expression in angular from outside of the angular framework
//        $scope.handle = 'newHandle';
//        console.log('Scope changed');
//    }, 3000);
    
}]);