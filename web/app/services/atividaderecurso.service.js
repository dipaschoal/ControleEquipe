(function () {
    'use strict';
    angular.module('ControleEquipeApp').factory('AtividadeRecursoService', AtividadeRecursoService);

    AtividadeRecursoService.$inject = ['$http'];

    function AtividadeRecursoService($http) {

        var service = {
            getAtividadesRecurso: getAtividadesRecurso
        };
        return service;

        function getAtividadesRecurso() {
            return $http.get('http://localhost/ControleEquipe/rest-api/atividadesRecurso');
        }
    }

}());
