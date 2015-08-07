var myApp = angular.module('myApp', []);

myApp.controller('mainController', ['$scope', function($scope) {
    
    $scope.name = 'Vasiliy';
    
}]);

myApp.controller('secondController', ['$scope', function($scope) {
    
    $scope.name = 'Ivan';
    
}]);
