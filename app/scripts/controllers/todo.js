'use strict';

/**
 * @ngdoc function
 * @name angularJsApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularJsApp
 */
angular.module('angularJsApp')
  .controller('TodoController', function ($scope, $rootScope, $mdDialog) {
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

	$scope.addTodo = function(event) {
		$mdDialog.show({
			controller: 'TodoController',
			templateUrl: 'views/todo-form.html',
			parent: angular.element(document.body),
			targetEvent: event,
			clickOutsideToClose:true
	    })
	    .then(function(response){
	    	$rootScope.todoList.push(response);
	    });
	};

	$scope.createTodo = function(todo){
		$mdDialog.hide(todo);
	};

	$scope.cancel = function() {
		$mdDialog.cancel();
	};

	$scope.deleteToDo = function(index) {
		$scope.todoList.splice(index, 1);
	};
  });
