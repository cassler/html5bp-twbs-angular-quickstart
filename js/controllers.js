
// LEARNR - The future of
var learnr = angular.module('learnr', []);

learnr.controller('appController', function appController($scope, $http) {

	$scope.app = {
		'title'			: 'Angular Bootstrap Quickstart',
		'version'		: '0.1.0',
		'progress'		: '32',
		'description'	: 'A bare bones starting point for using Twitter Bootstrap and Angular JS for rapid application development',
		'url'				: 'https://github.com/cassler/html5bp-twbs-angular-quickstart',
		'downloadURL'	: 'https://github.com/cassler/html5bp-twbs-angular-quickstart/archive/master.zip',
		'angVersion'	: '1.2.16',
		'angURL'			: 'https://angularjs.org/',
		'twbsVersion'	: '3.1.1',
		'twbsURL'		: 'http://getbootstrap.com',
		'jqVersion'		: '1.11.0',
		'jqURL'			: 'http://jquery.com',
	}

	$http.get('data/libraries.json').success(function(libraries) {
		$scope.libs = libraries;
	});

	$http.get('data/users.json').success(function(users) {
		$scope.users = users;
	});

	$http.get('data/cdnjs.json').success(function(jslist) {
		$scope.jslist = jslist;
		$scope.order = 'name'; 
	});


	$scope.author = {
		'name'	: 'Darin Cassler',
		'title'	: 'Web Application Developer',
		'company': 'Cassler Labs',
		'url'		: 'http://cassler.net',
	}

	

});



