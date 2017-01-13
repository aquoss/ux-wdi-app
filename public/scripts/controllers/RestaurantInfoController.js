angular.module('feedable')
       .controller('RestaurantInfoController', RestaurantInfoController);

RestaurantInfoController.$inject = ['$location', 'ModalService'];
function RestaurantInfoController($location, ModalService){
  var vm = this;
  vm.goBack = function(){
    $location.path('/');
  }
  vm.showPickUpModal = function(){
    ModalService.showModal({
      templateUrl: '/templates/pick-up',
      controller: 'PickUpController'
    }).then(function(modal){
      modal.element.modal();
    })
  }

  vm.showDropOffModal = function(){
    ModalService.showModal({
      templateUrl: '/templates/drop-off',
      controller: 'DropOffController'
    }).then(function(modal){
      modal.element.modal();
    })
  }


}
