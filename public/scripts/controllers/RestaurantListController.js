angular.module('feedable')
       .controller('RestaurantListController', RestaurantListController);

RestaurantListController.$inject=['$http'];
function RestaurantListController($http){
  var vm=this;

  $http({
    method: 'GET',
    url: '/restaurants'
  }).then(function successCallback(response) {
    vm.restaurants = response.data;
    console.log(vm.restaurants);
  }, function errorCallback(response) {
    console.log('There was an error getting the data', response);
  });

}
