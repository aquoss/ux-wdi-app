angular.module('feedable')
       .controller('DropOffController', DropOffController);

DropOffController.$inject=['$location'];
function DropOffController($location){
  var vm=this;
  vm.kitchens = [
    {name: 'San Francisco-Marin Food Bank'},
    {name: 'Project Homeless Connect'},
    {name: 'Edgewood'},
    {name: 'Alameda Food Bank'},
    {name: 'Glide'}
  ];
  vm.confirmation = function(){
    $location.path('/restaurant/drop-off-confirmation');
  }
}
