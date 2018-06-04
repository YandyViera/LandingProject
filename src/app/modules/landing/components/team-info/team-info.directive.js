/**
 * Created by !V! on 6/4/2018.
 */
'use strict';
angular.module('myApp.shared')
    .directive('teamWrapper', [function() {
        return{
            restrict: 'E',
            replace:true,
            scope: {
                memberName: '@',
                memberInfo: '@',
                src: '@'
            },
            templateUrl: "app/modules/landing/components/team-info/team-info.component.html",
            transclude: false
        }
    }]);
;