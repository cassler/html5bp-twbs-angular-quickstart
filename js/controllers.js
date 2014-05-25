var myNameSpace = angular.module('ngApp', []);

myNameSpace.controller('appController', function appController($scope) {

	$scope.app = {
		'title'			: 'Angular Bootstrap Quickstart',
		'version'		: '0.1.0',
		'progress'		: '23',
		'description'	: 'A bare bones starting point for using Twitter Bootstrap and Angular JS for rapid application development',
		'url'				: 'https://github.com/cassler/html5bp-twbs-angular-quickstart',
		'downloadURL'	: 'https://github.com/cassler/html5bp-twbs-angular-quickstart/archive/master.zip',
		'angVersion'	: '1.2.16',
		'angUrl'			: 'https://angularjs.org/',
		'twbsVersion'	: '3.1.1',
		'twbsURL'		: 'http://getbootstrap.com',
		'jqVersion'		: '1.11.0',
		'jqURL'			: 'http://jquery.com',
	}

	$scope.author = {
		'name'	: 'Darin Cassler',
		'title'	: 'Web Application Developer',
		'company': 'Cassler Labs',
		'url'		: 'http://cassler.net',
	}
});



