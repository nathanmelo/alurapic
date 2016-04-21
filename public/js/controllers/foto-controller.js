angular.module('alurapic').controller('FotoController',function($scope, $http){

  $scope.foto  = {};
  $scope.mensagem = '';

  $scope.submeter = function(){

    if($scope.formulario.$valid){
      $http.post('v1/fotos', $scope.foto)
      .success(function(){
        $scope.foto = {};
        $scope.mensagem = 'Foto incluida com sucesso.';
        console.log($scope.foto);
      })
      .error(function(error){
        $scope.mensagem = 'Não foi possível incluir a foto.';
        console.log(error);
      });
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
