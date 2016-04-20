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

});
