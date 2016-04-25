angular.module('alurapic').controller('FotosController',function($scope, recursoFoto){

  $scope.fotos = [];//declared array
  $scope.filtro = '';
  $scope.mensagem = '';

//better way using $resurce -- Less code :)
  recursoFoto.query(function(fotos){
    $scope.fotos = fotos;
  }, function(error){
    console.log(error);
  });

  $scope.remover = function(foto){

    //better way using $resurce -- Less code :)
    recursoFoto.delete({fotoId : foto._id}, function(){
      var indiceFoto = $scope.fotos.indexOf(foto);
      $scope.fotos.splice(indiceFoto, 1);
      $scope.mensagem = 'Foto ' +foto.titulo+ ' removida com sucesso.';
    }, function (error){
      console.log(error);
      $scope.mensagem = 'Não foi possível remover a foto '+ foto.titulo;
    });
  };


});
