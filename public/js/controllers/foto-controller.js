angular.module('alurapic').controller('FotoController',function($scope, cadastroDeFotos, recursoFoto, $routeParams){

  //our variables
  $scope.foto  = {};
  $scope.mensagem = '';

  //here is the editition logic
  if ($routeParams.fotoId){

    recursoFoto.get({fotoId : $routeParams.fotoId}, function(foto){
      $scope.foto = foto;
    }, function(error){
      console.log(error);
      $scope.mensagem = "Não foi possivel obter a foto";
    });
  }

  //here is the include logic
  $scope.submeter = function(){
    //if the form do not contain any error
    if($scope.formulario.$valid){

      cadastroDeFotos.cadastrar($scope.foto)
      .then(function(dados){
        $scope.mensagem = dados.mensagem;
        if(dados.inclusao) $scope.foto = {};
      })
      .catch(function(dados){
        $scope.mensagem = dados.mensagem;
      });

    }//close if

  };



});
