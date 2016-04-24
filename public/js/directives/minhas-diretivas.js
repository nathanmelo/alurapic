angular.module('minhasDiretivas',[])
.directive('meuPainel', function(){

 var ddo = {}; //directive definition object

 ddo.restict = "AE"; //ATRIBUTE or ELEMENT
 ddo.scope = { //this scope is only for this directive
   titulo: '@'
 };

 ddo.transclude = true;

 ddo.templateUrl = 'js/directives/meu-painel.html';

 return ddo;

})
.directive('minhaFoto', function() {

    var ddo = {};

    ddo.restrict = "AE";

    ddo.scope = {
        titulo: '@',
        url: '@'
    };

    ddo.templateUrl = 'js/directives/minha-foto.html';

    return ddo;
})
.directive('meuBotaoPerigo', function(){
  var ddo = {};

  ddo.restrict = "E"; //Element
  ddo.scope = {
      nome: '@',
      acao: '&' //here we want to pass a param and not a String.. So we used &(expression)
  };

  ddo.template = '<button ng-click="acao(foto)" class="btn btn-danger btn-block">{{nome}}</button>';

  return ddo;

});
