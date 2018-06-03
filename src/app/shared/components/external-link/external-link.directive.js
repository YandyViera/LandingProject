/**
 * Created by !V! on 6/3/2018.
 */
'use strict';
angular.module('myApp.shared')
    .directive('externalLink', [function() {
        return{
            restrict: 'E',
            replace: true,
            scope: {
                linkName: '@'
            },
            template: '<a class="external-link" href="#"><i class="fa fa-{{linkName}}"></i></a>',
            transclude: false,
            link: function(scope, element, attributes){

            }
        }
    }]);
;