
var app = angular.module('app', []);

app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider
      .when('/AddNewOrder', { templateUrl: 'html/addOrder.html',
	                            controller: 'showOrderController' })
	                           
      .when('/ShowOrders',  { templateUrl: 'html/showOrder.html',
	                            controller: 'showOrderController' })
	                            
      .otherwise({ redirectTo: '/ShowOrders' });
}]);

