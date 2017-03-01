angular.module("myApp").config(function($stateProvider,$urlRouterProvider){
	
	$urlRouterProvider.when("", "/index");

	$stateProvider
	.state("index",{
		url:"/index",
		templateUrl:"./controllers/index/index.html",
		controller:"indexCtrl"
	})
	.state("bank",{
		url:"/bank",
		templateUrl:"./controllers/bank/bank.html",
		controller:"bankCtrl"
	})
	.state("know",{
		url:"/know",
		templateUrl:"./controllers/know/know.html",
		controller:"knowCtrl"
	})
	.state("myself",{
		url:"/myself",
		templateUrl:"./controllers/myself/myself.html",
		controller:"myselfCtrl"
	})
	.state("course",{
		url:"/course",
		templateUrl:"./controllers/course/course.html",
		controller:"courseCtrl"
	})
	.state("content",{
		url:"/content",
		templateUrl:"./controllers/course.content/content.html",
		controller:"contentCtrl"
	})
})