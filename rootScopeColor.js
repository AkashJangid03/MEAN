var app = angular.module('colorApp',[]);
app.run(function($rootScope){
    $rootScope.color='blue';
});
app.controller('colorCtrl', function($scope){
    $scope.color ="red";
});