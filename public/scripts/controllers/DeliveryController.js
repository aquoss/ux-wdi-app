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
    console.log('hi')
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

  var map;
  var allMarkers;
  vm.map = function newMap() {
    // Create a map object and specify the DOM element for display.
    map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 37.78, lng: -122.44},
      zoom: 9
    });

    // vm.makeMarker = vm.soupKitchens.forEach(function(kitchen){
    //
    //   var marker = new google.maps.Marker({
    //     position: kitchen.location,
    //     // animation: google.maps.Animation.DROP,
    //     icon: '../../images/kitchen.svg',
    //     map: map
    //   })
    //
    //   marker.setMap(map);
    //   allMarkers.push(marker);
    // })

    // var contentString = '<h4>'+kitchen.name+'</h4>';
    // var infowindow = new google.maps.InfoWindow({
    //   content: contentString
    // });
    //
    // marker.setMap(map);
    // marker.addListener('click', function() {
    //   infowindow.open(map, marker);
    // });
  }

  vm.dropPin = function(location){
    singleMarker = new google.maps.Marker({
      icon: '../../images/kitchen.svg',
      position: location,
      animation: google.maps.Animation.DROP,
      map: map
    })
  }

  vm.removePin = function(){
    vm.dropPin(null);
  }

}
