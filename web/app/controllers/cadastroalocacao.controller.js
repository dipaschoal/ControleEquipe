(function () {
    'use strict';
    angular.module('ControleEquipeApp').controller('CadastroAlocacaoController', CadastroAlocacaoController);

    CadastroAlocacaoController.$inject = ['AtividadeService', 'RecursoService', 'PapelAtuacaoService', 'AtividadeRecursoService'];

    function CadastroAlocacaoController(AtividadeService, RecursoService, PapelAtuacaoService, AtividadeRecursoService) {
        var vm = this;

        vm.atividades = [];
        vm.recursos = [];
        vm.papeisAtuacao = [];
        vm.atividadesRecurso = [];

        vm.getAtividades = getAtividades;
        vm.getRecursos = getRecursos;
        vm.getPapeisAtuacao = getPapeisAtuacao;
        vm.getAtividadesRecurso = getAtividadesRecurso;

        vm.getAtividades();
        vm.getRecursos();
        vm.getPapeisAtuacao();
        vm.getAtividadesRecurso();

        vm.message = "Alocacao";

        console.log(vm);

        function getAtividades() {
            AtividadeService.getAtividades().then(isSuccess, isError);

            function isSuccess(response) {
                vm.atividades = response.data;
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

        function getPapeisAtuacao() {
            PapelAtuacaoService.getPapeisAtuacao().then(isSuccess, isError);

            function isSuccess(response) {
                vm.papeisAtuacao = response.data;
            }

            function isError(response) {
                console.log("Erro ao carregar os papeis de atuacao.");
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
