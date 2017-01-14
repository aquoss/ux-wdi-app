angular.module('feedable', ['ngRoute', 'ngAnimate', 'angularModalService'])
       .config(config);

config.$inject = ['$routeProvider', '$locationProvider'];
function config($routeProvider, $locationProvider){
  $routeProvider
    .when('/', {
      templateUrl: '/templates/homepage',
      controller: 'HomepageController',
      controllerAs: 'homepageCtrl'
    })
    .when('/restaurant', {
      templateUrl: '/templates/restaurant-info',
      controller: 'RestaurantInfoController',
      controllerAs: 'restaurantInfoCtrl'
    })
    .when('/soup-kitchen', {
      templateUrl: '/templates/restaurant-list',
      controller: 'RestaurantListController',
      controllerAs: 'restaurantListCtrl'
    })
    // .when('/restaurant/drop-off-confirmation', {
    //   templateUrl: '/templates/confirmation',
    //   controller: 'ConfirmationController',
    //   controllerAs: 'confirmationCtrl'
    // })
    // .when('/restaurant/pick-up-confirmation', {
    //   templateUrl: '/templates/confirmation',
    //   controller: 'ConfirmationController',
    //   controllerAs: 'confirmationCtrl'
    // })
    .otherwise({
      redirectTo: '/'
    });

    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });

}
