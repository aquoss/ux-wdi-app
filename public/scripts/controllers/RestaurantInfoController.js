angular.module('feedable')
       .controller('RestaurantInfoController', RestaurantInfoController);

RestaurantInfoController.$inject = ['$location', '$uibModal','$http','$routeParams'];
function RestaurantInfoController($location, $uibModal, $http, $routeParams){
  var vm = this;
  vm.newRest = {};
  vm.newPickUp = {};
  vm.newDropOff = {};
  vm.success = null;

  $http({
    method: 'GET',
    url: '/restaurants'
  }).then(function success(res){
    vm.restaurants = res.data;
  })

  vm.save = function(newRest){
    console.log(newRest);
    $http({
      method: 'POST',
      url: '/restaurants',
      data: newRest
    }).then(function success(res){
      vm.restaurants.push(res.data);
      console.log(vm.restaurants);
    })
    vm.success = true;
  }

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


}
