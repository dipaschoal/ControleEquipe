(function () {
    'use strict';
    angular.module('ControleEquipeApp').controller('CadastroAtividadeController', CadastroAtividadeController);

    CadastroAtividadeController.$inject = ['CelulaService', 'FaseService', 'ResponsavelService', 'AtividadeService', 'TipoAtividadeService'];

    function CadastroAtividadeController(CelulaService, FaseService, ResponsavelService, AtividadeService, TipoAtividadeService) {
        var vm = this;

        vm.celulas = [];
        vm.fases = [];
        vm.responsaveis = [];
        vm.atividades = [];
        vm.tipoAtividades = [];

        vm.limparTipoAtividade = limparTipoAtividade;
        vm.limparCadastro = limparCadastro;
        vm.sortTable = sortTable;

        vm.getCelulas = getCelulas;
        vm.getFases = getFases;
        vm.getResponsaveis = getResponsaveis;

        vm.getAtividades = getAtividades;
        vm.addAtividade = addAtividade;
        vm.editarAtividade = editarAtividade;

        vm.getTiposAtividade = getTiposAtividade;

        vm.getCelulas();
        vm.getFases();
        vm.getResponsaveis();
        vm.getAtividades();
        vm.getTiposAtividade();
        vm.sortTable();
        vm.message = "Atividade";

        console.log(vm);

        function getCelulas() {
            CelulaService.getCelulas().then(isSuccess, isError);

            function isSuccess(response) {
                vm.celulas = response.data;
            }

            function isError(response) {
                console.log("Erro ao carregar as celulas.");
            }
        }

        function getFases() {
            FaseService.getFases().then(isSuccess, isError);

            function isSuccess(response) {
                vm.fases = response.data;
            }

            function isError(response) {
                console.log("Erro ao carregar as fases.");
            }
        }

        function getResponsaveis() {
            ResponsavelService.getResponsaveis().then(isSuccess, isError);

            function isSuccess(response) {
                vm.responsaveis = response.data;
            }

            function isError(response) {
                console.log("Erro ao carregar os responsaveis.");
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

        function addAtividade() {
            AtividadeService.addAtividade(vm.atividade).then(isSuccess, isError);

            console.log(angular.toJson(vm.atividade));

            function isSuccess(response) {
                //TODO: carregar a lista de atividades
                vm.message = "Salvo com sucesso";
                vm.atividade = angular.copy(response.data);
                vm.isEdicao = false;
            }

            function isError(response) {
                console.log("Erro ao salvar a atividade.");
            }
        }

        function getTiposAtividade() {
            TipoAtividadeService.getTiposAtividade().then(isSuccess, isError);

            function isSuccess(response) {
                vm.tipoAtividades = response.data;
            }

            function isError(response) {
                console.log("Erro ao carregar os tipos de atividades.");
            }
        }


        function limparTipoAtividade() {
            vm.atividade.idfase = null;
            vm.atividade.numeroatividade = null;
        }

        function limparCadastro() {
            vm.atividade = null;
            vm.isEdicao = false;
        }

        function sortTable() {
            vm.sortType = 'nomeatividade';
            vm.sortReverse = true;
        }

        function editarAtividade(atividadeToUpdate) {

            vm.atividade = atividadeToUpdate;
            vm.isEdicao = true;
        }

    }
}());
