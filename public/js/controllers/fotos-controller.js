angular.module('alurapic').controller('FotosController',function($scope, $http){

  $scope.fotos = [];//declared array

  var promisse = $http.get('v1/fotos'); //get requisition to server
  promisse.then(function(retorno){
    $scope.fotos = retorno.data;//if this promisse return something ;)
  }).catch(function(error){
    console.log(error);//if the promisse return any error we will log it;
  });


});
