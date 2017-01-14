angular.module('feedable')
       .controller('RestaurantInfoController', RestaurantInfoController);

RestaurantInfoController.$inject = ['$location', 'ModalService'];
function RestaurantInfoController($location, ModalService){
  var vm = this;
  vm.saved = null;
  vm.goBack = function(){
    $location.path('/');
  }
  vm.showPickUpModal = function(){
    ModalService.showModal({
      templateUrl: '/templates/pick-up',
      controller: 'DeliveryController',
      controllerAs: 'deliveryCtrl'
    }).then(function(modal){
      modal.element.modal();
    })
  }

  vm.showDropOffModal = function(){
    ModalService.showModal({
      templateUrl: '/templates/drop-off',
      controller: 'DeliveryController',
      controllerAs: 'deliveryCtrl'
    }).then(function(modal){
      modal.element.modal();
    })
  }

}
