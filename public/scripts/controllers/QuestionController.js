angular.module('feedable')
       .controller('QuestionController', QuestionController);

QuestionController.$inject = ['$location'];
function QuestionController($location){
  var vm = this;
  vm.newLocation = function(type){
    if (type === 'yes'){
      $location.path('/new-restaurant');
    } else if (type === 'no'){
      $location.path('/restaurants');
    }
  }


}
