angular.module('alurapic').controller('FotoController',function($scope, $http, $routeParams){

  //our variables
  $scope.foto  = {};
  $scope.mensagem = '';

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
        $http.put('v1/fotos/'+ $scope.foto._id, $scope.foto)
        .success(function(){
          $scope.mensagem = 'A foto '+ $scope.foto.titulo + ' foi alterada com sucesso.';
        })
        //exception can happen :(
        .error(function(error){
          $scope.mensagem = 'Não foi possível alterar a foto.';
          console.log(error);
        })

      }else{
        //create function is called
        $http.post('v1/fotos', $scope.foto)
        .success(function(){
          //clean the form
          $scope.foto = {};
          $scope.mensagem = 'Foto incluida com sucesso.';
          console.log($scope.foto);
        })
        //exception can happen :(
        .error(function(error){
          $scope.mensagem = 'Não foi possível incluir a foto.';
          console.log(error);
        });
      }
    }

  };



});


/**angular.module('alurapic').controller('FotoController',function($scope, $http){

  $scope.foto = {};

  $scope.submeter = function(){

    console.log($scope.foto);

  };

});
**/
