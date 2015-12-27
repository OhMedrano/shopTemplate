'use strict';

/**
 * @ngdoc function
 * @name shopTemplateApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the shopTemplateApp
 */
angular.module('shopTemplateApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
