app.controller('addOrderController', ['$scope','$http', function($scope, $http) {
	
	$scope.submitAnOrder = function(lineItem) {
		$scope.lineItem = lineItem; 
		$scope.lineItem = {
	      "itemNo": 5,
	      "itemName": "shirts",
	      "quantity": 4,
	      "unitPrice": 350
		};
	 	console.log($scope.lineItem);
	 	$http({method: 'GET', url: '../json/newOrder.json', data: {lineItem: $scope.lineItem}})
          .success(function(data, status) {
            $scope.status = status;
            $scope.newOrderData = data;
            $scope.isOrderCreated = 1;
        })
          .error(function(data, status) {
            console.log("Request failed");
            $scope.status = status;
            $scope.data = "Request failed";
        }); 
	} 
}
]);