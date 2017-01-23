/**
 * @author a.demeshko
 * created on 12/16/15
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.charts.chartJs')
    .controller('chartJs2DCtrl', chartJs2DCtrl);

  /** @ngInject */
  function chartJs2DCtrl($scope,$rootScope) {
    $scope.labels =["May", "Jun", "Jul", "Aug", "Sep"];

    $scope.data = $rootScope.linechart;
    $scope.series = ['Product A', 'Product B'];
  }

})();