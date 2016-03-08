  var ControleEquipeApp = angular.module('ControleEquipeApp', ['ngRoute', 'MainController', 'CadastroAlocacaoController', 'CadastroLancamentoController', 'CadastroProjetoController', 'CadastroRecursoController']);

  // configure our routes
  ControleEquipeApp.config(['$routeProvider',
  function ($routeProvider) {

          $routeProvider
          // route for the home page
              .when('/', {
              templateUrl: 'index.html',
              controller: 'MainController'
          })

          // route for the about page
          .when('/alocacao', {
              templateUrl: 'partials/alocacao.html',
              controller: 'CadastroAlocacaoController'
          })

          .when('/lancamento', {
              templateUrl: 'partials/lancamento.html',
              controller: 'CadastroLancamentoController'
          })

          .when('/manter/projeto', {
              templateUrl: 'partials/manter-projeto.html',
              controller: 'CadastroProjetoController'
          })

          .when('/manter/recurso', {
              templateUrl: 'partials/manter-recurso.html',
              controller: 'CadastroRecursoController'
          });

  }]);
