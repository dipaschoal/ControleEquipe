(function () {
    'use strict';
    angular.module('ControleEquipeApp', ['ngRoute'])
        .config(AppConfig);

    AppConfig.$inject = ['$routeProvider'];

    function AppConfig($routeProvider) {

        $routeProvider
            .when('/alocacao', {
                templateUrl: 'partials/alocacao.html',
                controller: 'CadastroAlocacaoController as cadastroAlocacaoController'
            })
            .when('/lancamento', {
                templateUrl: 'partials/lancamento.html',
                controller: 'CadastroLancamentoController as cadastroLancamentoController'
            })
            .when('/manter/projeto', {
                templateUrl: 'partials/manter-projeto.html',
                controller: 'CadastroProjetoController as cadastroProjetoController'
            })
            .when('/manter/recurso', {
                templateUrl: 'partials/manter-recurso.html',
                controller: 'CadastroRecursoController as cadastroRecursoController'
            });
    };
}());
