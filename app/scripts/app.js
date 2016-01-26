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
    'ngMessages',
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
  .run(function($rootScope){
     $rootScope.todoList = [
      {'title':'Wake Up','description':'Wake me up inside','done':true},
      {'title':'Put a Little Makeup','description':'Why you let your keys over the table?','done':false}
    ];
    $rootScope.contactList = [
      {'name':'Daniel', 'lastName':'Rodriguez','phone':'0426-5199933', 'img':'images/Daniel Rodriguez.jpg'},
      {'name':'David', 'lastName':'Klie','phone':'0424-5555555', 'img':''},
      {'name':'Gustavo', 'lastName':'Benzecri','phone':'0424-5555555', 'img':''},
      {'name':'Monica', 'lastName':'Figuera','phone':'0424-5555555', 'img':''},
      {'name':'Carlos', 'lastName':'Spaggiani','phone':'0424-5555555', 'img':''},
      {'name':'Aldrix', 'lastName':'Marfil','phone':'0424-5555555', 'img':''},
      {'name':'Jonnathan', 'lastName':'Chiu Yung Ho','phone':'0424-5555555', 'img':''}
    ];
  })

  .controller('MyController', function($scope, $mdSidenav) {
  $scope.openLeftMenu = function() {
    $mdSidenav('left').toggle();
  };
});