angular.module('alurapic').controller('FotoController',function($scope, $http, $routeParams){

  //our variables
  $scope.foto  = {};
  $scope.mensagem = '';
  var recursoFoto = $resource('v1/fotos/:fotoId', null, {
    update : {
      method: 'PUT'
    }
  });
  //here is the editition logic
  if ($routeParams.fotoId){

    $http.get('v1/fotos/' + $routeParams.fotoId)
    .success(function(foto){
      $scope.foto = foto;
    })
      //exception can happen :(
    .error(function(error){
      console.log(error);
      $scope.mensagem = 'Não foi possível obter a foto.';
    });
  }

  //here is the include logic
  $scope.submeter = function(){
    //if the form do not contain any error
    if($scope.formulario.$valid){

      if($scope.foto._id){
        //edition function is called
        recursoFoto.update({fotoId : $scope.foto._id}, $scope.foto, function(){
          $scope.mensagem = 'A foto '+ $scope.foto.titulo + ' foi alterada com sucesso';
        }), function(error){
          $scope.mensagem = 'Não foi possível alterar a foto.';
          console.log(error);
        });

      }else{
        //create function is called

        recursoFoto.save($scope.foto, function(){
          //clean the form
          $scope.foto = {};
          $scope.mensagem = 'Foto incluida com sucesso.';
        }, function(error){
          $scope.mensagem = 'Não foi possível incluir a foto.';
          console.log(error);
        });
      }//close else
    }//close if

  };



});
