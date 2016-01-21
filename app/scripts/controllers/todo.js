'use strict';

/**
 * @ngdoc function
 * @name angularJsApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularJsApp
 */
angular.module('angularJsApp')
  .controller('TodoController', function ($scope, $mdDialog) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.doPrimaryAction = function(event) {
	    $mdDialog.show(
	      $mdDialog.alert()
	        .title('Primary Action')
	        .textContent('Primary actions can be used for one click actions')
	        .ariaLabel('Primary click demo')
	        .ok('Awesome!')
	        .targetEvent(event)
	    );
	  };
  });
