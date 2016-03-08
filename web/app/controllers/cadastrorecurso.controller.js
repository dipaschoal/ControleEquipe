(function () {
    'use strict';
    angular.module('ControleEquipeApp').controller('CadastroRecursoController', CadastroRecursoController);

    CadastroRecursoController.$inject = ['CelulaService', 'EmpresaService', 'PapelAtuacaoService', 'RecursoService'];

    function CadastroRecursoController(CelulaService, EmpresaService, PapelAtuacaoService, RecursoService) {
        var vm = this;

        vm.empresas = [];
        vm.papeisAtuacao = [];
        vm.celulas = [];

        vm.getEmpresas = getEmpresas;
        vm.getPapeisAtuacao = getPapeisAtuacao;
        vm.getCelulas = getCelulas;

        vm.getEmpresas();
        vm.getPapeisAtuacao();
        vm.getCelulas();

        vm.message = null;
        vm.message = "Recurso";

        function getEmpresas() {
            EmpresaService.getEmpresas().then(isSuccess, isError);

            function isSuccess(response) {
                vm.empresas = response.data;
            }

            function isError(response) {
                console.log("Erro ao carregar as empresas.");
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

        function getCelulas() {
            CelulaService.getCelulas().then(isSuccess, isError);

            function isSuccess(response) {
                vm.celulas = response.data;
            }

            function isError(response) {
                console.log("Erro ao carregar as celulas.");
            }
        }
    }
}());
