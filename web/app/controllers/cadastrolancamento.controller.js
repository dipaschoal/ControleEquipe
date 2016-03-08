(function () {
    'use strict';
    angular.module('ControleEquipeApp').controller('CadastroLancamentoController', CadastroLancamentoController);

    CadastroLancamentoController.$inject = ['FaseService', 'LancamentoService', 'ProjetoService', 'RecursoService'];

    function CadastroLancamentoController(FaseService, LancamentoService, ProjetoService, RecursoService) {
        var vm = this;

        vm.fases = [];
        vm.projetos = [];
        vm.recursos = [];

        vm.getFases = getFases
        vm.getProjetos = getProjetos;
        vm.getRecursos = getRecursos;

        vm.getFases();
        vm.getProjetos();
        vm.getRecursos();

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

        function getProjetos() {
            ProjetoService.getProjetos().then(isSuccess, isError);

            function isSuccess(response) {
                vm.projetos = response.data;
            }

            function isError(response) {
                console.log("Erro ao carregar os projetos.");
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
    }
}());
