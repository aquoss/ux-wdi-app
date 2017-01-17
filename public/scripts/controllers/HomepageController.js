angular.module('feedable')
       .controller('HomepageController', HomepageController);

HomepageController.$inject = ['$location'];
function HomepageController($location){
  var vm = this;
  vm.newLocation = function(type){
    if (type === 'restaurant'){
      $location.path('/new-profile');
    } else if (type === 'soup'){
      $location.path('/soup-kitchen');
    }
  }


}
