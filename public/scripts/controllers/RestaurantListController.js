angular.module('feedable')
       .controllelr('RestaurantListController', RestaurantListController);

RestaurantListController.$inject=['$http'];
function RestaurantListController($http){
  var vm=this;

  $http({
    method: 'GET',
    url: '/api/restaurants'
  }).then(function successCallback(response) {
    vm.restuarants = response.data;
  }, function errorCallback(response) {
    console.log('There was an error getting the data', response);
  });

}
