/**
 * Created by !V! on 5/31/2018.
 */
'use strict';
angular.module('myApp.shared')
    .directive('inlineForm', [function() {
        return{
            restrict: 'E',
            replace:true,
            templateUrl:"app/shared/components/forms/form-inline/form-inline.component.html",
            transclude: false
        }
    }]);
;