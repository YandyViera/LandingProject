/**
 * Created by !V! on 6/2/2018.
 */
angular.module('myApp.shared')

    .directive('navigation', function(){

        return {
            restrict: 'E'
            , replace: true
            , templateUrl: "app/core/navigation/nav.component.html"
            , link: function($scope, element, attrs) {

                $(window).scroll(function(){
                    if ($(window).scrollTop() <= 0) {
                        $(element).addClass('navbar-transparent');
                    }
                    else {
                        $(element).removeClass('navbar-transparent');
                    }
                });

            }
        }

    });