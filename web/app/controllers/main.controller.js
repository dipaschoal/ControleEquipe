(function () {
    'use strict';
    angular.module('ControleEquipeApp').controller('MainController', MainController);

//    MainController.$inject = ['CadastroAlocacaoController', 'CadastroLancamentoController', 'CadastroProjetoController', 'CadastroRecursoController'];

    function MainController() {

        var vm = this;
        vm.message = "Main";
    }
}());
