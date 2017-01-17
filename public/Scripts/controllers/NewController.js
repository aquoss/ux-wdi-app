angular.module('feedable')
       .controller('NewController', NewController);

NewController.$inject = ['$location'];
function NewController($location){
  var vm = this;
  vm.newLocation = function(type){
    if (type === 'yes'){
      $location.path('/new-restaurant');
    } else if (type === 'no'){
      $location.path('/restaurants');
    }
  }


}
