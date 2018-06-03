/**
 * Created by !V! on 5/31/2018.
 */
'use strict';
angular.module('myApp.shared')
    .directive('defaultInput', [function() {
        return{
            restrict: 'E',
            replace:true,
            scope: {
                type: '@',
                id: '@',
                placeholder: '@'
            },
            template:'<input type="{{type}}" class="form-control elegancy-input elegancy-input-dark" id="{{id}}" placeholder="{{placeholder}}">',
            transclude: false
        }
    }]);
;