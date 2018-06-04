/**
 * Created by !V! on 6/3/2018.
 */
'use strict';
angular.module('myApp.shared')
    .directive('featureWrapper', [function() {
        return{
            restrict: 'E',
            replace:true,
            scope: {
                featureName: '@',
                featureInfo: '@',
                iconName: '@'
            },
            templateUrl: "app/modules/landing/components/feature-info/feature-info.component.html",
            transclude: false
        }
    }]);
;