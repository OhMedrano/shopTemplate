'use strict';

/**
 * @ngdoc directive
 * @name shopTemplateApp.directive:sideBar
 * @description
 * # sideBar
 */
angular.module('shopTemplateApp')
  .directive('sideBar', function () {
    return {
      templateUrl:'templates/sideBar.html',
      restrict: 'EA',
      link: function postLink(scope, element, attrs) {
        
      }
    };
  });
