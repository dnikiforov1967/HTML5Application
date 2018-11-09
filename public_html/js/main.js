/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */



var app = angular.module('ping', []);
var ctrl = app.controller("myCtrl", ['$scope', function($scope) {
	$scope.colorSet = ["green","red","blue","grey"];
	$scope.colorValue="green";
	$scope.mychoose = { mycolor: 'green' }
	$scope.wert = '';
	
	$scope.appendColorLast = function() {
		$scope.colorSet.push($scope.wert);
	}
	
	$scope.appendColorFirst = function() {
		$scope.colorSet.unshift($scope.wert);
	}	

	$scope.removeColorLast = function() {
		$scope.colorSet.pop();
	}
	
	$scope.removeColorFirst = function() {
		$scope.colorSet.shift();
	}	
		
}]);

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

app.directive("mytimer", ['$interval', function($interval) {
	var counter = 0;
	return {
		retsrict:'A',
		scope: {
			period: '=',
			collist: '='
		},
		link: function(scope, $element, $attrs) {
			$interval(function() {
				counter = (counter==scope.collist.length-1 ? 0 : ++counter);
				$element.css({
					backgroundColor: scope.collist[counter]
				});
			}, scope.period);
		}
	};
}])