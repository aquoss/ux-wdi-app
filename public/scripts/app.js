angular.module('feedable', ['ngRoute'])
       .config(config);

config.$inject = ['$routeProvider', '$locationProvider'];
function config($routeProvider, $locationProvider){
  $routeProvider
    .when('/', {
      templateUrl: 'templates/homepage.html',
      controller: 'HomepageController',
      controllerAs: 'homepageCtrl'
    })
    .when('/restaurant', {
      templateUrl: 'templates/restaurant-info.html',
      controller: 'RestaurantInfoController',
      controllerAs: 'restaurantInfoCtrl'
    })
    // .when('/restaurant/pickup', {
    //
    // })
    // .when('/restaurant/drop-off', {
    //
    // })
    .otherwise({
      redirectTo: '/'
    });

    $locationProvider.html5Mode({
      enabled: true,
      requiredBase: false
    });

}
