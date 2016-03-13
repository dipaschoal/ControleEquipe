(function () {
    'use strict';
    angular.module('ControleEquipeApp').controller('CadastroRecursoController', CadastroRecursoController);

    CadastroRecursoController.$inject = ['CelulaService', 'EmpresaService', 'PapelAtuacaoService', 'RecursoService', '$location', '$anchorScroll'];

    function CadastroRecursoController(CelulaService, EmpresaService, PapelAtuacaoService, RecursoService, $location, $anchorScroll) {
        var vm = this;

        vm.empresas = [];
        vm.papeisAtuacao = [];
        vm.celulas = [];
        vm.recursos = [];

        vm.limparCadastro = limparCadastro;
        vm.editarRecurso = editarRecurso;
        vm.sortTable = sortTable;
        vm.goToElement = goToElement;

        vm.getEmpresas = getEmpresas;
        vm.getPapeisAtuacao = getPapeisAtuacao;
        vm.getCelulas = getCelulas;

        /**
         *  CRUD - Recursos
         */
        vm.getRecursos = getRecursos;
        vm.addRecurso = addRecurso;
        vm.updateRecurso = updateRecurso;
        vm.deleteRecurso = deleteRecurso;
        //================================

        vm.getEmpresas();
        vm.getPapeisAtuacao();
        vm.getCelulas();
        vm.getRecursos();

        vm.sortTable();

        vm.message = "Recurso";
        vm.element = 'legenda';

        console.log(vm);

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

        function getRecursos() {
            RecursoService.getRecursos().then(isSuccess, isError);

            function isSuccess(response) {
                vm.recursos = response.data;
            }

            function isError(response) {
                console.log("Erro ao carregar os recursos.");
            }
        }

        function addRecurso() {
            RecursoService.addRecurso(vm.recurso).then(isSuccess, isError);

            console.log(angular.toJson(vm.recurso));

            function isSuccess(response) {
                vm.message = "Salvo com sucesso";
                vm.isEdicao = false;
                vm.limparCadastro();
                vm.getRecursos();
            }

            function isError(response) {
                console.log("Erro ao salvar o recurso.");
            }
        }


        function updateRecurso() {

            RecursoService.updateRecurso(vm.recurso).then(isSuccess, isError);

            console.log(angular.toJson(vm.recurso));

            function isSuccess(response) {

                vm.message = "Editado com sucesso";
                vm.isEdicao = false;
                vm.limparCadastro();
                vm.getRecursos();
            }

            function isError(response) {
                console.log("Erro ao editar o recurso.");
            }
        }

        function deleteRecurso(idrecurso) {
            console.log(idrecurso);

            RecursoService.deleteRecurso(idrecurso).then(isSuccess, isError);

            function isSuccess(response) {

                vm.message = "Deletado com sucesso";
                vm.getRecursos();
            }

            function isError(response) {
                console.log("Erro ao deletar o recurso.");
            }
        }

        function editarRecurso(recursoToUpdate) {

            vm.recurso = angular.copy(recursoToUpdate);
            vm.isEdicao = true;
//            vm.goToElement();
        }

        function limparCadastro() {
            vm.recurso = null;
            vm.isEdicao = false;
            vm.pesquisarRecurso = "";
        }

        function sortTable() {
            vm.sortType = 'nomerecurso';
            vm.sortReverse = false;
        }

        function goToElement() {
            $location.hash(vm.element);
            $anchorScroll();
        }

    }
}());
