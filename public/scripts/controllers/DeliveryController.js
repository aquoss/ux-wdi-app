angular.module('feedable')
       .controller('DeliveryController', DeliveryController);

DeliveryController.$inject = ['$location', '$uibModal','$http','$routeParams'];
function DeliveryController($location, $uibModal, $http, $routeParams){
  var vm = this;
  vm.restaurant = {};
  vm.newPickUp = {};
  vm.newDropOff = {};

  $http({
    method: 'GET',
    url: '/restaurants/'+$routeParams.id
  }).then(function success(res){
    vm.restaurant = res.data;
  });

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

  vm.exit = function(){
    modalInstance.close();
    $location.path('/');
  }

  vm.savePickUp = function(request){
    vm.newPickUp = request;
    $http({
      method: 'POST',
      url: '/request/'+$routeParams.id,
      data: request
    }).then(function success(res){
      vm.newPickUp = res.data;
      console.log(vm.newPickUp);
    }, function error(res){
      console.log('error: ', res);
    })
  }

  vm.saveDropOff = function(request){
    vm.newDropOff = request;
  }

  vm.goBack = function(){
    $location.path('/');
  }
}
