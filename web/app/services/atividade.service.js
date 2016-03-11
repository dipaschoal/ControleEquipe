(function () {
    'use strict';
    angular.module('ControleEquipeApp').factory('AtividadeService', AtividadeService);

    AtividadeService.$inject = ['$http'];

    function AtividadeService($http) {

        var service = {
            getAtividades: getAtividades,
            addAtividade: addAtividade,
            updateAtividade: updateAtividade
        };
        return service;

        function getAtividades() {
            return $http.get('http://localhost/ControleEquipe/rest-api/atividades');
        }

        function addAtividade(atividade) {
            return $http.post('http://localhost/ControleEquipe/rest-api/atividades', atividade);
        }

        function updateAtividade(atividade) {
            return $http.put('http://localhost/ControleEquipe/rest-api/atividades', atividade);
        }
    }
}());
