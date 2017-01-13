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
    // // .when('/restaurant/pickup', {
    // //
    // // })
    // // .when('/restaurant/drop-off', {
    // //
    // // })
    // .otherwise({
    //   redirectTo: '/'
    // });

    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });

}
