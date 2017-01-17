angular.module('feedable')
       .controller('RestaurantInfoController', RestaurantInfoController);

RestaurantInfoController.$inject = ['$location', '$uibModal'];
function RestaurantInfoController($location, $uibModal){
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
    vm.newPickUp.push(request);
    modalInstance.close();
  }


}
