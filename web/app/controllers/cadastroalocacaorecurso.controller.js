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
        vm.editarAlocacaoRecurso = editarAlocacaoRecurso;
        vm.limparCadastro = limparCadastro;
        vm.sortTable = sortTable;

        vm.getAlocacoesRecurso = getAlocacoesRecurso;
        vm.addAlocacaoRecurso = addAlocacaoRecurso;
        vm.updateAlocacaoRecurso = updateAlocacaoRecurso;
        vm.deleteAlocacaoRecurso = deleteAlocacaoRecurso;

        vm.getAlocacoes();
        vm.getRecursos();
        vm.getPapeisAtuacao();
        vm.getAlocacoesRecurso();
        vm.sortTable();

        vm.message = "Alocacao";

        vm.alocacaorecurso = {
            flagpontofocal: false,
            flagalocacaorecursoativa: true
        };

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

        function addAlocacaoRecurso() {
            AlocacaoRecursoService.addAlocacaoRecurso(vm.alocacaorecurso).then(isSuccess, isError);

            console.log(angular.toJson(vm.alocacaorecurso));

            function isSuccess(response) {
                //TODO: carregar a lista de alocacoes
                vm.message = "Salvo com sucesso";
                vm.isEdicao = false;
                vm.limparCadastro();
                vm.getAlocacoesRecurso();
            }

            function isError(response) {
                console.log("Erro ao salvar a alocacao do recurso.");
            }
        }

        function updateAlocacaoRecurso() {
            AlocacaoRecursoService.updateAlocacaoRecurso(vm.alocacaorecurso).then(isSuccess, isError);

            console.log(angular.toJson(vm.alocacaorecurso));

            function isSuccess(response) {
                //TODO: carregar a lista de alocacoes
                vm.message = "Editado com sucesso";
                vm.isEdicao = false;
                vm.limparCadastro();
                vm.getAlocacoesRecurso();
            }

            function isError(response) {
                console.log("Erro ao editar a alocacao do recurso.");
            }
        }

        function deleteAlocacaoRecurso(idalocacaorecurso) {
            console.log(idalocacaorecurso);

            AlocacaoRecursoService.deleteAlocacaoRecurso(idalocacaorecurso).then(isSuccess, isError);

            function isSuccess(response) {

                vm.message = "Deletado com sucesso";
                vm.getAlocacoesRecurso();
            }

            function isError(response) {
                console.log("Erro ao deletar a alocacao do recurso.");
            }
        }

        function limparCadastro() {
            vm.alocacaorecurso = null;
            vm.alocacaorecurso = {
                flagpontofocal: false,
                flagalocacaorecursoativa: true,
                quantidadehoras: 0.0
            };

            vm.isEdicao = false;
            vm.pesquisarAlocacaoRecurso = "";
        }

        function sortTable() {
            vm.sortType = 'nomerecurso';
            vm.sortReverse = true;
        }

        function editarAlocacaoRecurso(alocacaoRecursoToUpdate) {

            console.log(angular.toJson(alocacaoRecursoToUpdate));

            vm.alocacaorecurso = angular.copy(alocacaoRecursoToUpdate);
            vm.alocacaorecurso.datainicioalocacao = new Date(alocacaoRecursoToUpdate.datainicioalocacao);
            vm.alocacaorecurso.datafimalocacao = new Date(alocacaoRecursoToUpdate.datafimalocacao);
            vm.alocacaorecurso.flagpontofocal = Boolean(alocacaoRecursoToUpdate.flagpontofocal.valueOf);
            vm.alocacaorecurso.flagalocacaorecursoativa = Boolean(alocacaoRecursoToUpdate.flagalocacaorecursoativa.valueOf);
            vm.alocacaorecurso.quantidadehoras = parseFloat(alocacaoRecursoToUpdate.quantidadehoras);
            vm.isEdicao = true;
            //            vm.goToElement();
        }
    }
}());
