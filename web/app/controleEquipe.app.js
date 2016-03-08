(function () {
    'use strict';
    angular.module('ControleEquipeApp', ['ngRoute']);

    ControleEquipeApp.$inject = ['CadastroAlocacaoController', 'CadastroLancamentoController', 'CadastroProjetoController', 'CadastroRecursoController'];


    function ControleEquipeApp($routeProvider, CadastroAlocacaoController, CadastroLancamentoController, CadastroProjetoController, CadastroRecursoController) {

        var vm = this;

        // configure our routes
        vm.getRoute = getRoute
        vm.getRoute($routeProvider);

        function getRoute(routeProvider) {

            routeProvider
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
        }
    }
}());
