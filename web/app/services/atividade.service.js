(function () {
    'use strict';
    angular.module('ControleEquipeApp').factory('AtividadeService', AtividadeService);

    AtividadeService.$inject = ['$http'];

    function AtividadeService($http) {

        var service = {
            getAtividades: getAtividades
        };
        return service;

        function getAtividades() {
            return $http.get('http://localhost/ControleEquipe/rest-api/atividades');
        }
    }

}());
