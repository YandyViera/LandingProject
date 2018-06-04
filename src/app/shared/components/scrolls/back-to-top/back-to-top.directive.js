/**
 * Created by !V! on 6/3/2018.
 */
angular.module('myApp.shared')

    .directive('backToTop', function(){

        return {
            restrict: 'E'
            , replace: true
            , template: '<div class="back-to-top"><i class="fa fa-long-arrow-up"></i> back to top</div>'
            , link: function($scope, element, attrs) {

                $(window).scroll(function(){

                    if ($(window).scrollTop() <= 0) {
                        $(element).fadeOut();
                    }
                    else {
                        $(element).fadeIn();
                    }

                    var scrollTop = $(window).scrollTop();
                    var docHeight = $(document).height();
                    var winHeight = $(window).height();
                    var scrollPercent = (scrollTop) / (docHeight - winHeight) * 100;

                    if (scrollPercent > 95) {
                        $(element).addClass('back-to-top-absolute');
                    }
                    else {
                        $(element).removeClass('back-to-top-absolute');
                    }

                });

                $(element).on('click', function(){
                    $('html, body').animate({ scrollTop: 0 }, 'fast');
                });

            }
        }

    });