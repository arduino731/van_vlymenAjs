'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
  $routeProvider.when('/', {
    templateUrl: 'view1/home.html',
    controller: 'HomeCtrl'
  });
  $routeProvider.when('/about', {
  templateUrl: 'view1/about.html',
  controller: 'AboutCtrl'
  });
  $routeProvider.when('/portfolio', {
  templateUrl: 'view1/portfolio.html',
  controller: 'PortfolioCtrl'
  });
  $routeProvider.when('/contact', {
    templateUrl: 'view1/contact.html',
    controller: 'ContactCtrl'
  });
}])

.controller('View1Ctrl', [function() {

}])

.controller('HomeCtrl', [function() {

}])

.controller('AboutCtrl', [function() {

}])

.controller('PortfolioCtrl', [function() {

}])

.controller('ContactCtrl', [function() {

}]);