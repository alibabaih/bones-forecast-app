var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function ($routeProvider) {
    
    $routeProvider
    
    .when('/', {
        templateUrl: 'pages/main.html',
        controller: 'mainController'
    })
    
    .when('/second', {
        templateUrl: 'pages/second.html',
        controller: 'secondController'
    })
    
    .when('/second/:num', {
        templateUrl: 'pages/second.html',
        controller: 'secondController'
    })
    
});

myApp.controller('mainController', ['$scope', '$log', function($scope, $log) {
    
    $scope.people = [
        {
            name: 'John Doe',
            address: '555 Main St.',
            city: 'New York',
            state: 'NY',
            zip: '11111'
        },
        {
            name: 'Jane Doe',
            address: '333 Second St.',
            city: 'New York',
            state: 'NY',
            zip: '11111'
        },
        {
            name: 'Vico Doe',
            address: '777 Third St.',
            city: 'New York',
            state: 'NY',
            zip: '11111'
        }
                    ]
    
    $scope.formattedAddress = function(person) {
      
        return person.address + ', ' + person.city + ', ' + person.state + ' ' + person.zip;
        
    };
    
}]);

myApp.controller('secondController', ['$scope', '$log', '$routeParams', function($scope, $log, $routeParams) {
    
    
    
}]);

myApp.directive("searchResult", function() {
   return {
       restrict: 'AECM',
       templateUrl: 'directives/searchresult.html',
       replace: true,
       scope: {
           personObject: "=",
           formattedAddressFunction: "&"
       }, link: function(scope, elements, attrs) {
           console.log('Compiling...');
           if(scope.personObject.name == 'Jane Doe') {
               elements.removeAttr('class');
           }
           console.log(elements);
       }
   }
});
