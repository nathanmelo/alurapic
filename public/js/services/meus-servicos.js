angular.module('meusServicos', ['ngResource'])
.factory('recursoFoto', function($resource){
  return $resource('v1/fotos/:fotoId', null, {
    update : {
      method: 'PUT'
    }
  });
})
.factory('cadastroDeFotos', function(recursoFoto, $q){
  //$q allow us to create a promisse

  var servico = {};

  servico.cadastrar = function(foto){
    return $q(function(resolve, reject){
      if(foto._id){
        recursoFoto.update({fotoId: foto._id}, foto, function(){
          resolve({
            mensagem : 'Foto '+ foto.titulo + ' atualizada com sucesso!',
            inclusao : false
          });
        }, function(error){
          console.log(error);
          reject({
            mensagem : 'Não foi possível alterar a foto '+foto.titulo
          });
        });
      }else{
        recursoFoto.save(foto, function(){
          resolve({
            mensagem : 'Foto '+ foto.titulo + ' incluida com sucesso',
            inclusao : true
          });
        }, function(error){
          console.log(error);
          reject({
            mensagem : 'Não foi possível incluir a foto '+foto.titulo});
        });
      }
    });
  };
  return servico;
});
