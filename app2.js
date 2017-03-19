/**
 * Created by Zaid_Ibrahim on 3/12/2017.
 */
var app2 = angular.module('myApp2', []);

app2.controller('myCtrl', function($scope) {
    $scope.firstName = "John";
    $scope.names = ["usa","uk","pak","uae"];

});

app2.directive("w3TestDirective", function() {
    return {
        template : "<h1>Made by a directive!</h1>"
    };
});
