angular.module('feedable')
       .controller('DeliveryController', DeliveryController);

DeliveryController.$inject=['$location','$window'];
function DeliveryController($location, $window){
  var vm=this;
  vm.saved = null;
  vm.kitchens = [
    {name: 'San Francisco-Marin Food Bank'},
    {name: 'Project Homeless Connect'},
    {name: 'Edgewood'},
    {name: 'Alameda Food Bank'},
    {name: 'Glide'}
  ];
  vm.confirmation = function(){
    vm.saved = true;
  }

  vm.toHomepage = function(){
    $location.path('/');
    $window.location.reload();
  }

}
