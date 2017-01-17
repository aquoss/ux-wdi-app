angular.module('feedable')
       .controller('RestaurantInfoController', RestaurantInfoController);

RestaurantInfoController.$inject = ['$location', '$uibModal','$http'];
function RestaurantInfoController($location, $uibModal, $http){
  var vm = this;
  vm.newPickUp = {};
  vm.newDropOff = {};

  vm.goBack = function(){
    $location.path('/');
  }

  vm.dropOffModal = function(){
    modalInstance = $uibModal.open({
      templateUrl: '/templates/drop-off',
      controller: 'RestaurantInfoController',
      controllerAs: 'restaurantInfoCtrl'
    });
  }

  vm.pickUpModal = function(){
    modalInstance = $uibModal.open({
      templateUrl: '/templates/pick-up',
      controller: 'RestaurantInfoController',
      controllerAs: 'restaurantInfoCtrl'
    });
  }

  // Close the modal
  vm.close = function(){
    modalInstance.close()
  };

  vm.savePickUp = function(request){
    $http({
      method: 'POST',
      url: '/api/pick-up/'+$routeParams.id,
      data: request
    }).then(function success(res){
      vm.newPickUp = res.data;
    }, function error(res){
      console.log('error: ', res);
    })
    modalInstance.close();
  }


}
