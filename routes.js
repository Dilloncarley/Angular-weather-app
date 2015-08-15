weatherApp.config(function($routeProvider){

//Routes to pages (single page app)
	$routeProvider

	.when('/', {
			templateUrl: 'pages/yourcity.html',
			controller: 'mainController'

	})
	.when('/forecast',{

		templateUrl: 'pages/forecast.html',
		controller: 'secondController'

	})

  .when('/forecast/:days',{

    templateUrl: 'pages/forecast.html',
    controller: 'secondController'

  })


});
