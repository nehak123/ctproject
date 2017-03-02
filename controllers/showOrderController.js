

app.controller('showOrderController', ['$scope','$http','$location', function($scope, $http, $location) {

      //view items
      $scope.getOrderDetails = function(orderid) {
        $scope.orderid = orderid;
        $scope.isOrderAvailable = 1;
        $http({method: 'GET', url: '../json/orderDetails.json', data: {orderId: orderid}})
          .success(function(data, status) {
            $scope.status = status;
            $scope.productdata = data;
            $scope.isOrderAvailable = 1;
        })
          .error(function(data, status) {
            console.log("Request failed");
            $scope.status = status;
            $scope.data = "Request failed";
            $scope.isOrderAvailable = 0;
        }); 
      }



      //Delete Row
      $scope.deleteOrderDetails = function(orderid) {
        $scope.allSelectedRows = document.getElementById("mytable").selectedRows;
        var itemNoList = [];
        for(var i in $scope.allSelectedRows){
          var itemSelected = {
            itemNo : $scope.allSelectedRows[i].row.itemNo.value
          }
          itemNoList.push(itemSelected);
        }
        $http({
            url: 'domain/resource',
            method: 'POST',
            data: {
                orderId: orderid,
                itemsDeleted: itemNoList
            },
            headers: {
                "Content-Type": "application/json;charset=utf-8"
            }
        }).then(function(res) {
            console.log(res.data);
            $scope.getOrderDetails(orderid);
        }, function(error) {
            console.log(error);
        });
      };
      
      //Update Row
      $scope.updateOrderDetails = function(orderid) {
        $scope.allUpdatedRows = document.getElementById("mytable").selectedRows;
        var itemList = [];
        for(var i in $scope.allUpdatedRows){
          var itemSelected = {
            itemNo : $scope.allUpdatedRows[i].row.itemNo.value,
            lineItemId : $scope.allUpdatedRows[i].row.lineItemId.value,
            itemName : $scope.allUpdatedRows[i].row.itemName.value,
            quantity : $scope.allUpdatedRows[i].row.quantity.value,
            unitPrice : $scope.allUpdatedRows[i].row.unitPrice.value
          }
          itemList.push(itemSelected);
        }
        $http({
            url: 'domain/resource',
            method: 'POST',
            data: {
                orderId : orderid,
                itemsUpdated : itemList
            },
            headers: {
                "Content-Type": "application/json;charset=utf-8"
            }
        }).then(function(res) {
            console.log(res.data);
            $scope.getOrderDetails(orderid);
        }, function(error) {
            console.log(error);
        });
      }
  }
]);
