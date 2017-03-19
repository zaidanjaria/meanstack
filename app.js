
var app = angular.module('myApp', []);

app.controller('cal',function($scope){

	$scope.add =  function(){
		return $scope.n1 + $scope.n2; }
	 $scope.addchk = false ;
	$scope.addshow = function(){
		$scope.addchk = true ;
	}

	$scope.sub =  function(){
		return $scope.n1 - $scope.n2; }
	 $scope.subchk = false ;
	

	$scope.mul =  function(){
		return $scope.n1 * $scope.n2; }
	 $scope.mulchk = false ;

	$scope.div =  function(){
		return ($scope.n1 / $scope.n2); }
	 $scope.divchk = false ;
	

	$scope.pow =  function(){
		return (Math.pow($scope.n1, $scope.n2) ); }
	 $scope.powchk = false ;

	$scope.sqrt =  function(){
		return (Math.sqrt($scope.n1) ); }
	 $scope.sqrtchk = false ;
	
	$scope.log =  function(){
		return (Math.log($scope.n1) ); }
	 $scope.logchk = false ;
	

	$scope.sin =  function(){
		return (Math.sin($scope.n1 *  Math.PI / 180) ); }
	 $scope.sinchk = false ;
	$scope.sinshow = function(){
		$scope.sinchk = true ;
	}  

	$scope.clear = function(){
		$scope.n1 = 0;
		$scope.n2 = 0;
	$scope.logchk = $scope.sinchk = $scope.sqrtchk= $scope.powchk =$scope.subchk= $scope.divchk=$scope.mulchk= $scope.addchk=false;
	}

})

app.controller('Ctrl', function($scope) {
    $scope.firstName = "John";
    $scope.lastName = "Doe";
    $scope.fullName = function() {
        return $scope.firstName + " " + $scope.lastName;
    };
});

app.directive("mydir", function() {
    return {
        template : "I was made in a directive constructor!"
    };
});