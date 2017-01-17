angular.module('feedable')
       .controller('RestaurantListController', RestaurantListController);

RestaurantListController.$inject=['$http','$location'];
function RestaurantListController($http, $location){
  var vm = this;
  vm.restaurants = {};
  $http({
    method: 'GET',
    url: '/restaurants'
  }).then(function successCallback(response) {
    vm.restaurants = response.data;
    console.log(vm.restaurants);
  }, function errorCallback(response) {
    console.log('There was an error getting the data', response);
  });

  vm.goBack = function(){
    $location.path('/');
  }

}
