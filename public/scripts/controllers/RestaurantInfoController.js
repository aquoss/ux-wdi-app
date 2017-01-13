angular.module('feedable')
       .controller('RestaurantInfoController', RestaurantInfoController);

RestaurantInfoController.$inject = ['$location'];
function RestaurantInfoController($location){
  var vm = this;
  vm.goBack = function(){
    $location.path('/');
  }


}
