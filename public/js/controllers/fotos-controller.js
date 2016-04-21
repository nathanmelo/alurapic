angular.module('alurapic').controller('FotosController',function($scope, $http){

  $scope.fotos = [];//declared array
  $scope.filtro = '';
  $scope.mensagem = '';

  $scope.remover = function(foto){

    console.log(foto);
    $http.delete('v1/fotos/'+foto._id)
    .success(function(){
      var indiceFoto = $scope.fotos.indexOf(foto);
      $scope.fotos.splice(indiceFoto, 1);
      $scope.mensagem = 'Foto ' +foto.titulo+ ' removida com sucesso.';
    })
    .error(function(error){
      console.log(error);
      $scope.mensagem = 'Não foi possível remover a foto '+ foto.titulo;
    });

  };

  $http.get('v1/fotos') //get requisition to server
  .success(function(fotos){
    $scope.fotos = fotos; //if this promisse return something ;)
  }).error(function(error){
    console.log(error);//if the promisse return an
  });


});
