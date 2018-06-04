/**
 * Created by !V! on 6/4/2018.
 */
'use strict';
angular.module('myApp.shared')
    .directive('projectWrapper', [function() {
        return{
            restrict: 'E',
            replace:true,
            scope: {
                projectName: '@',
                projectInfo: '@',
                src: '@'
            },
            templateUrl: "app/modules/landing/components/project-info/project-info.component.html",
            transclude: false
        }
    }]);
;