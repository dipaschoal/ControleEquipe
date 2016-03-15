(function () {
    'use strict';
    angular.module('ControleEquipeApp').controller('CadastroAlocacaoController', CadastroAlocacaoController);

    CadastroAlocacaoController.$inject = ['CelulaService', 'FaseService', 'ResponsavelService', 'AlocacaoService', 'TipoAlocacaoService', '$location', '$anchorScroll'];

    function CadastroAlocacaoController(CelulaService, FaseService, ResponsavelService, AlocacaoService, TipoAlocacaoService, $location, $anchorScroll) {
        var vm = this;

        vm.celulas = [];
        vm.fases = [];
        vm.responsaveis = [];
        vm.alocacoes = [];
        vm.tipoAlocacoes = [];

        vm.limparTipoAlocacao = limparTipoAlocacao;
        vm.limparCadastro = limparCadastro;
        vm.sortTable = sortTable;
        vm.goToElement = goToElement;

        vm.getCelulas = getCelulas;
        vm.getFases = getFases;
        vm.getResponsaveis = getResponsaveis;

        vm.getAlocacoes = getAlocacoes;
        vm.addAlocacao = addAlocacao;
        vm.editarAlocacao = editarAlocacao;
        vm.updateAlocacao = updateAlocacao;
        vm.deleteAlocacao = deleteAlocacao;

        vm.getTiposAlocacao = getTiposAlocacao;

        vm.getCelulas();
        vm.getFases();
        vm.getResponsaveis();
        vm.getAlocacoes();
        vm.getTiposAlocacao();
        vm.sortTable();

        vm.element = 'legenda';
        vm.message = "Alocacao";

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

        function getAlocacoes() {
            AlocacaoService.getAlocacoes().then(isSuccess, isError);

            function isSuccess(response) {
                vm.alocacoes = response.data;
            }

            function isError(response) {
                console.log("Erro ao carregar as alocacoes.");
            }
        }

        function addAlocacao() {
            AlocacaoService.addAlocacao(vm.alocacao).then(isSuccess, isError);

            console.log(angular.toJson(vm.alocacao));

            function isSuccess(response) {
                //TODO: carregar a lista de alocacoes
                vm.message = "Salvo com sucesso";
                vm.isEdicao = false;
                vm.limparCadastro();
                vm.getAlocacoes();
            }

            function isError(response) {
                console.log("Erro ao salvar a alocacao.");
            }
        }

        function updateAlocacao() {
            AlocacaoService.updateAlocacao(vm.alocacao).then(isSuccess, isError);

            console.log(angular.toJson(vm.alocacao));

            function isSuccess(response) {
                //TODO: carregar a lista de alocacoes
                vm.message = "Editado com sucesso";
                vm.isEdicao = false;
                vm.limparCadastro();
                vm.getAlocacoes();
            }

            function isError(response) {
                console.log("Erro ao editar a alocacao.");
            }
        }

        function deleteAlocacao(idalocacao) {
            console.log(idalocacao);

            AlocacaoService.deleteAlocacao(idalocacao).then(isSuccess, isError);

            function isSuccess(response) {

                vm.message = "Deletado com sucesso";
                vm.getAlocacoes();
            }

            function isError(response) {
                console.log("Erro ao deletar a alocacao.");
            }
        }

        function getTiposAlocacao() {
            TipoAlocacaoService.getTiposAlocacao().then(isSuccess, isError);

            function isSuccess(response) {
                vm.tipoAlocacoes = response.data;
            }

            function isError(response) {
                console.log("Erro ao carregar os tipos de alocacoes.");
            }
        }


        function limparTipoAlocacao() {
            vm.alocacao.idfase = null;
            vm.alocacao.numeroalocacao = null;
        }

        function limparCadastro() {
            vm.alocacao = null;
            vm.isEdicao = false;
            vm.pesquisarAlocacao = "";
        }

        function sortTable() {
            vm.sortType = 'descricaotipoalocacao';
            vm.sortReverse = true;
        }

        function editarAlocacao(alocacaoToUpdate) {

            vm.alocacao = angular.copy(alocacaoToUpdate);
            vm.isEdicao = true;
            //            vm.goToElement();
        }

        function goToElement() {
            $location.hash(vm.element);
            $anchorScroll();
        }
    }
}());
