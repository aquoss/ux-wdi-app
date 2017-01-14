angular.module('feedable')
       .controller('DeliveryController', DeliveryController);

DeliveryController.$inject=['$location'];
function DeliveryController($location){
  var vm=this;
  vm.kitchens = [
    {name: 'San Francisco-Marin Food Bank'},
    {name: 'Project Homeless Connect'},
    {name: 'Edgewood'},
    {name: 'Alameda Food Bank'},
    {name: 'Glide'}
  ];
  vm.confirmation = function(type){
    $location.path('/restaurant/'+type+'-confirmation');
  }

}
