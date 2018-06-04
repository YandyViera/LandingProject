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
                linkName: '@',
                linkText: '@',
                href: '@'
            },
            template: '<a href="{{href}}" class="external-link"><i class="external-link-icon"><i class="fa fa-{{linkName}}"></i></i>{{linkText}}</a>',
            transclude: false,
            link: function(scope, element, attributes){

            }
        }
    }]);
;