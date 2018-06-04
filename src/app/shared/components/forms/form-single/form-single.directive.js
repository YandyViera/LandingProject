/**
 * Created by !V! on 6/3/2018.
 */
'use strict';
angular.module('myApp.shared')
    .directive('formSingle', [function() {
        return{
            restrict: 'E',
            replace:true,
            templateUrl:"app/shared/components/forms/form-single/form-single.component.html",
            transclude: false
        }
    }]);
