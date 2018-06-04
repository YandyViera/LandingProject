/**
 * Created by !V! on 6/3/2018.
 */
'use strict';
angular.module('myApp.shared')
    .directive('submitButton', [function() {
        return{
            restrict: 'E',
            replace:true,
            scope: {
                text: '@',
                onSubmit: '&',
                onFormSubmit: '&'
            },
            template: '<button class="btn default-btn" type="submit" ng-click="onFormSubmit()" >{{text}}</button>',
            transclude: false,
            link: function(scope, element, attributes){
                scope.submit = function(){
                    scope.onSubmit();
                }
            }
        }
    }]);
;