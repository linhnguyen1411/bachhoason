(function() {
  angular.module('adminApp', ['ngAnimate', 'ui.bootstrap', 'commonLib', 'ngMessages'])
    .config(['$httpProvider', '$locationProvider', '$qProvider', defaultConfig])
})();
