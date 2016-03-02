'use strict';

//Le paramètre :id correspond à l'identifiant de l'application sélectionné
angular.module('catalogueApp')
  .config(function ($routeProvider) {
    $routeProvider
    .when('/search', {
        templateUrl: './templates/search.html',
        controller: 'searchCtrl'
      })
      .when('/category', {
        templateUrl: './templates/item.html',
        controller: 'ItemCtrl'
      })
      .when('/item', {
        templateUrl: './templates/category.html',
        controller: 'CategoryCtrl'
      })
      .when('/itemDetail', {
        templateUrl: './templates/itemDetails.html',
        controller: 'itemDetailsCtrl'
      });
      
  });
