/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */



var app = angular.module('ping', []);
var ctrl = app.controller("myCtrl", function($scope) {
	$scope.colorSet = ["green","red","blue","grey"];
	$scope.colorValue="green";
});

app.directive("mycolor",function() {
	return {
		restrict: 'A',
		scope: {color: '=mycolor'},
		link: function(scope, $element, $attrs) {
			scope.$watch('color', function () {
				$element.css({
					backgroundColor: scope.color
				});
			});
		}	
  };
});