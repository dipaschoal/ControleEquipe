(function () {
    'use strict';
    angular.module('ControleEquipeApp').controller('CadastroLancamentoController', CadastroLancamentoController);

    CadastroLancamentoController.$inject = ['FaseService', 'LancamentoService', 'AlocacaoService', 'RecursoService', 'AlocacaoRecursoService'];

    function CadastroLancamentoController(FaseService, LancamentoService, AlocacaoService, RecursoService, AlocacaoRecursoService) {
        var vm = this;

        vm.fases = [];
        vm.alocacoes = [];
        vm.recursos = [];
        vm.alocacaoRecurso = [];

        vm.getFases = getFases
        vm.getAlocacoes = getAlocacoes;
        vm.getRecursos = getRecursos;
        vm.getAlocacoesRecurso = getAlocacoesRecurso;

        vm.getFases();
        vm.getAlocacoes();
        vm.getRecursos();
        vm.getAlocacoesRecurso();

        vm.message = "Lancamento";

        console.log(vm);

        function getFases() {
            FaseService.getFases().then(isSuccess, isError);

            function isSuccess(response) {
                vm.fases = response.data;
            }

            function isError(response) {
                console.log("Erro ao carregar as fases.");
            }
        }

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
