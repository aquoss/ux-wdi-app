angular.module('feedable')
       .controller('RestaurantInfoController', RestaurantInfoController);

RestaurantInfoController.$inject = ['$location','$http'];
function RestaurantInfoController($location, $http){
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
      $location.path('restaurants/'+res.data._id+'/delivery');
    })
  }

  vm.goBack = function(){
    $location.path('/');
  }

}
