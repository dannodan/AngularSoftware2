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

    $scope.todoList = [
    	{'title':'Wake Up','description':'Wake me up inside','done':true},
    	{'title':'Put a Little Makeup','description':'Why you let your keys over the table?','done':false}
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

	$scope.addTodo = function(event) {
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
