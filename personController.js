var app = angular.module('nameApp',[]);
app.controller('nameCtrl', function($scope) {
    $scope.firstname = "Aakash";
    $scope.lastname = "Jangid";
    $scope.full_name = function(){
        return $scope.firstname + " " +$scope.lastname;
    }
});
