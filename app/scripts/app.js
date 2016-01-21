'use strict';

/**
 * @ngdoc overview
 * @name angularJsApp
 * @description
 * # angularJsApp
 *
 * Main module of the application.
 */
angular
  .module('angularJsApp', [
    'ngMaterial',
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngAria',
    'ui.router',
    'ngMdIcons'
  ])
  .config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/contactos');
    $stateProvider
    .state('contactos', {
      url: '/contactos',
      templateUrl: 'views/contactos.html'
    })
    .state('todo', {
      url: '/todo',
      templateUrl: 'views/todo.html'
    })
    .state('extras', {
      url: '/extras',
      templateUrl: 'views/extras.html'
    });
  })

  .controller('MyController', function($scope, $mdSidenav) {
  $scope.openLeftMenu = function() {
    $mdSidenav('left').toggle();
  };
});