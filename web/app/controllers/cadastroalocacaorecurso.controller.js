(function () {
    'use strict';
    angular.module('ControleEquipeApp').controller('CadastroAlocacaoRecursoController', CadastroAlocacaoRecursoController);

    CadastroAlocacaoRecursoController.$inject = ['AlocacaoService', 'RecursoService', 'PapelAtuacaoService', 'AlocacaoRecursoService'];

    function CadastroAlocacaoRecursoController(AlocacaoService, RecursoService, PapelAtuacaoService, AlocacaoRecursoService) {
        var vm = this;

        vm.alocacoes = [];
        vm.recursos = [];
        vm.papeisAtuacao = [];
        vm.alocacoesRecurso = [];

        vm.getAlocacoes = getAlocacoes;
        vm.getRecursos = getRecursos;
        vm.getPapeisAtuacao = getPapeisAtuacao;
        vm.getAlocacoesRecurso = getAlocacoesRecurso;

        vm.getAlocacoes();
        vm.getRecursos();
        vm.getPapeisAtuacao();
        vm.getAlocacoesRecurso();

        vm.message = "Alocacao";

        console.log(vm);

        function getAlocacoes() {
            AlocacaoService.getAlocacoes().then(isSuccess, isError);

            function isSuccess(response) {
                vm.alocacoes = response.data;
            }

            function isError(response) {
                console.log("Erro ao carregar as alocacoes.");
            }
        }

        function getRecursos() {
            RecursoService.getRecursos().then(isSuccess, isError);

            function isSuccess(response) {
                vm.recursos = response.data;
            }

            function isError(response) {
                console.log("Erro ao carregar os recursos.");
            }
        }

        function getPapeisAtuacao() {
            PapelAtuacaoService.getPapeisAtuacao().then(isSuccess, isError);

            function isSuccess(response) {
                vm.papeisAtuacao = response.data;
            }

            function isError(response) {
                console.log("Erro ao carregar os papeis de atuacao.");
            }
        }

        function getAlocacoesRecurso() {
            AlocacaoRecursoService.getAlocacoesRecurso().then(isSuccess, isError);

            function isSuccess(response) {
                vm.alocacoesRecurso = response.data;
            }

            function isError(response) {
                console.log("Erro ao carregar as alocacao do recurso.");
            }
        }
    }
}());
