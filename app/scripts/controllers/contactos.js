'use strict';

/**
 * @ngdoc function
 * @name angularJsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularJsApp
 */
angular.module('angularJsApp')
  .controller('ContactController', function ($scope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.contactList = [
    	{'name':'Daniel', 'lastName':'Rodriguez','phone':'0426-5199933', 'img':''},
    	{'name':'David', 'lastName':'Klie','phone':'0424-5555555', 'img':''},
    	{'name':'Gustavo', 'lastName':'Benzecri','phone':'0424-5555555', 'img':''},
    	{'name':'Monica', 'lastName':'Figuera','phone':'0424-5555555', 'img':''},
    	{'name':'Carlos', 'lastName':'Spaggiani','phone':'0424-5555555', 'img':''},
    	{'name':'Aldrix', 'lastName':'Marfil','phone':'0424-5555555', 'img':''},
    	{'name':'Jonnathan', 'lastName':'Chiu Yung Ho','phone':'0424-5555555', 'img':''}
    ];

  });
