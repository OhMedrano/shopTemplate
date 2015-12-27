'use strict';

/**
 * @ngdoc function
 * @name shopTemplateApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the shopTemplateApp
 */
angular.module('shopTemplateApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
