(function () {
    'use strict';
    angular.module('ControleEquipeApp', ['ngRoute'])
        .config(AppConfig);

    AppConfig.$inject = ['$routeProvider'];

    function AppConfig($routeProvider) {

        $routeProvider
            .when('/alocacao', {
                templateUrl: 'partials/alocar-recurso.html',
                controller: 'CadastroAlocacaoRecursoController as cadastroAlocacaoRecursoController'
            })
            .when('/lancamento', {
                templateUrl: 'partials/lancamento.html',
                controller: 'CadastroLancamentoController as cadastroLancamentoController'
            })
            .when('/manter/alocacao', {
                templateUrl: 'partials/manter-alocacao.html',
                controller: 'CadastroAlocacaoController as cadastroAlocacaoController'
            })
            .when('/manter/recurso', {
                templateUrl: 'partials/manter-recurso.html',
                controller: 'CadastroRecursoController as cadastroRecursoController'
            });
    };


}());
