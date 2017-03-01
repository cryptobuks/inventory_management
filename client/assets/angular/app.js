console.log("Loading Master App JS");

var app = angular.module('app', ['ngRoute', 'ngMessages']);

app.config( function ($routeProvider) {

  $routeProvider

    .when('/', {
      templateUrl: 'partials/login.html',
      controller: 'loginController',
      controllerAs: 'LC'
    })
    .when('/inventory', {
      templateUrl: 'partials/inventory.html',
      controller: 'inventoryController',
      controllerAs: 'IC'
    })

    .when('/orders', {
      templateUrl: 'partials/orders.html',
      controller: 'ordersController'
    })

    .when('/companies', {
      templateUrl: 'partials/companies.html',
      controller: 'companiesController'
    })
    .when('/add_order', {
      templateUrl: 'partials/add_order.html',
      controller: 'addOrderController',
      controllerAs: 'AOC'
    })
    .when('/add_company', {
      templateUrl: 'partials/add_company.html',
      controller: 'addCompanyController',
      controllerAs: 'ACC'
    })
    .when('/add_order/:company_id', {
      templateUrl: 'partials/add_products.html',
      controller: 'addProductsController',
      controllerAs: 'APC'
    })

    .otherwise({
      redirectTo: '/'
    });

});
