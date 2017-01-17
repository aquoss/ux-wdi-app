angular.module('feedable')
       .controller('DeliveryController', DeliveryController);

DeliveryController.$inject=['$location','$window'];
function DeliveryController($location, $window){
  var vm=this;

  vm.toHomepage = function(){
    $location.path('/');
    $window.location.reload();
  }

}
