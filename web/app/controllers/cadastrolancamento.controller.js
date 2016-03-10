(function () {
    'use strict';
    angular.module('ControleEquipeApp').controller('CadastroLancamentoController', CadastroLancamentoController);

    CadastroLancamentoController.$inject = ['FaseService', 'LancamentoService', 'AtividadeService', 'RecursoService', 'AtividadeRecursoService'];

    function CadastroLancamentoController(FaseService, LancamentoService, AtividadeService, RecursoService, AtividadeRecursoService) {
        var vm = this;

        vm.fases = [];
        vm.atividades = [];
        vm.recursos = [];
        vm.atividadeRecurso = [];

        vm.getFases = getFases
        vm.getAtividades = getAtividades;
        vm.getRecursos = getRecursos;
        vm.getAtividadesRecurso = getAtividadesRecurso;

        vm.getFases();
        vm.getAtividades();
        vm.getRecursos();
        vm.getAtividadesRecurso();

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

        function getAtividades() {
            AtividadeService.getAtividades().then(isSuccess, isError);

            function isSuccess(response) {
                vm.atividades = response.data;
            }

            function isError(response) {
                console.log("Erro ao carregar as atividades.");
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

        function getAtividadesRecurso() {
            AtividadeRecursoService.getAtividadesRecurso().then(isSuccess, isError);

            function isSuccess(response) {
                vm.atividadesRecurso = response.data;
            }

            function isError(response) {
                console.log("Erro ao carregar as atividade do recurso.");
            }
        }
    }
}());
