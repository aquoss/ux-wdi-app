angular.module('feedable')
       .controller('DeliveryController', DeliveryController);

DeliveryController.$inject = ['$location', '$uibModal','$http','$routeParams'];
function DeliveryController($location, $uibModal, $http, $routeParams){
  var vm = this;
  vm.restaurant = {};
  vm.soupKitchens = {};
  vm.newPickUp = {};
  vm.newDropOff = {};

  $http({
    method: 'GET',
    url: '/restaurants/'+$routeParams.id
  }).then(function success(res){
    vm.restaurant = res.data;
  });

  $http({
    method: 'GET',
    url: '/soup-kitchens'
  }).then(function success(res){
    vm.soupKitchens = res.data;
  });

  vm.dropOffModal = function(){
    modalInstance = $uibModal.open({
      templateUrl: '/templates/drop-off',
      controller: 'DeliveryController',
      controllerAs: 'deliveryCtrl'
    });
  }

  vm.pickUpModal = function(){
    modalInstance = $uibModal.open({
      templateUrl: '/templates/pick-up',
      controller: 'DeliveryController',
      controllerAs: 'deliveryCtrl'
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

  vm.map = function newMap() {
    // Create a map object and specify the DOM element for display.
    var map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 37.78, lng: -122.44},
      // scrollwheel: false,
      zoom: 12
    });

    // var marker = new google.maps.Marker({
    //   position: myLatLng,
    //   map: map,
    //   title: 'Hello World!'
    // });
  }

}
