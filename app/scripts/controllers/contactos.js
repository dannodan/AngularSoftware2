'use strict';

/**
 * @ngdoc function
 * @name angularJsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularJsApp
 */
angular.module('angularJsApp')
  .controller('ContactController', function ($scope, $rootScope, $mdDialog) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.doPrimaryAction = function(event, contact) {
		$mdDialog.show({
			locals: {contactSelected: contact},
			controller: function ($scope, contactSelected){
				$scope.contact = contactSelected;
			},
			templateUrl: '../views/contact-card.html',
			parent: angular.element(document.body),
			targetEvent: event,
			clickOutsideToClose:true,
		});
	};

  });
