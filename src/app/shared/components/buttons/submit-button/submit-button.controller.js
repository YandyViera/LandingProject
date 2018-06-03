angular.module('myApp.shared')
    .controller('submitCntler', ['$scope', '$location',  function ($scope, $location) {
    $scope.testcontroller=function()
    {
        alert("Working")
    }

}]);