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

})
.directive('meuFoco', function(){
    var ddo = {};

    ddo.restrict = "A";
    //& = expression, @ = string, = permit control directive e directive control communication (two-way)

      /**
      //if we don't use watch is not necessary for us to use this
      ddo.scope = {
        focado : '='
      };
      **/
    //$scope is the scope of controller, this scope is the scope of the directive
    //can acess the scope and the element where our tag (meu-foco) is.
    ddo.link = function(scope, element){
      scope.$on('fotoCadastrada', function(){
        element[0].focus();
      });
    }
    return ddo;
});
      /**
      //if we use a lot of watches it coud be expensive for load of our page
      scope.$watch('focado', function(){
        if(scope.focado){
          element[0].focus();
          scope.focado = false;
        }


      });
      <a href="/" class="btn btn-primary" meu-foco focado="focado">Voltar</a>
      **/
