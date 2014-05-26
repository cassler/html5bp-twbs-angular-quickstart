// Routes and such

var learnr = angular.module('learnr', [
	'ngRoute',
	'dataControllers'
]);

learnr.config(['$routeProvider', function($routeProvider) {
	
	$routeProvider.
	
	when('/list', {
		templateUrl: 'partials/hero.html',
		controller: 'DataController'
	}).
	
	otherwise({
		redirectTo: '/list'
	});

}]);