angular.module('alurapic').controller('FotosController',function($scope, $http){

  $scope.fotos = [];//declared array

  $http.get('v1/fotos') //get requisition to server
  .success(function(fotos){
    $scope.fotos = fotos; //if this promisse return something ;)
  }).error(function(error){
    console.log(error);//if the promisse return an
  });


});
