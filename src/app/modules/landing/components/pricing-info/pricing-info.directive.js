/**
 * Created by !V! on 6/3/2018.
 */
'use strict';
angular.module('myApp.shared')
    .directive('pricingWrapper', [function() {
        return{
            restrict: 'E',
            replace:true,
            scope: {
                price: '@',
                license: '@'
            },
            templateUrl: "app/modules/landing/components/pricing-info/pricing-info.component.html",
            transclude: false
        }
    }]);
;