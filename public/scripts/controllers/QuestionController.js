angular.module('feedable')
       .controller('QuestionController', QuestionController);

QuestionController.$inject = ['$location','$http'];
function QuestionController($location, $http){
  var vm = this;

  // $http({
  //   method: 'GET',
  //   url: '/templates/new-profile'
  // }).then(function successCallback(response) {
  //   console.log('it worked');
  // }, function errorCallback(response) {
  //   console.log('There was an error getting the data', response);
  // });

  vm.newLocation = function(type){
    if (type === 'yes'){
      $location.path('/new-restaurant');
    } else if (type === 'no'){
      $location.path('/restaurants');
    }
  }


}
