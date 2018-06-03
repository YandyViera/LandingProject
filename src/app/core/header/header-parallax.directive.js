/**
 * Created by !V! on 6/2/2018.
 */
angular.module('myApp.shared')

    .directive('imageParallax', function(){

        return {
            restrict: 'E'
            , replace: true
            , scope: {
                style: '@'
            }
            , template: '<div class="image" style="{{style}}"></div>'
            ,transclude: false
            , link: function($scope, element, attrs) {

                $(window).scroll(function(){
                    var parent_top = $(element).offset().top;
                    var window_bottom = $(window).scrollTop();

                    oVal = ((window_bottom - parent_top) / 3);
                    $(element).css('transform','translate3d(0px, ' + oVal + 'px, 0px)');
                });

            }
        }

    });