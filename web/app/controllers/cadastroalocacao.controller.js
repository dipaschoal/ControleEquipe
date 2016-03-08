(function () {
    'use strict';
    angular.module('ControleEquipeApp').controller('CadastroAlocacaoController', CadastroAlocacaoController);

    CadastroAlocacaoController.$inject = ['ProjetoService', 'RecursoService'];

    function CadastroAlocacaoController(ProjetoService, RecursoService) {
        var vm = this;

        vm.projetos = [];
        vm.recursos = [];

        vm.getProjetos = getProjetos;
        vm.getRecursos = getRecursos;

        vm.getProjetos();
        vm.getRecursos();

        vm.message = null;
        vm.message = "Alocacao";


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
