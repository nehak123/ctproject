app.controller('addOrderController', ['$scope','$http', function($scope, $http) {
	
	$scope.submitAnOrder = function() {
		$scope.lineItem = {};
		$scope.lineItem.itemNo = document.querySelector("paper-input[name=id]").value;
		$scope.lineItem.itemName = document.querySelector("paper-dropdown-menu").value;
		$scope.lineItem.quantity = document.querySelector("paper-input[name=quantity]").value;
		$scope.lineItem.unitPrice = document.querySelector("paper-input[name=price]").value;
	 	console.log($scope.lineItem);
	 	$http({method: 'POST', url: '../json/newOrder.json', data: {lineItem: $scope.lineItem}})
          .success(function(data, status) {
            $scope.status = status;
            $scope.newOrderData = data;
        })
          .error(function(data, status) {
            console.log("Request failed");
            $scope.status = status;
            $scope.data = "Request failed";
        }); 
	} 


	function onViewOrder(){
		alert("inside onViewOrder");
	};

	function addAnotherItem(){
		alert("inside addAnotherItem");
	};

}]);
