(function () {
    'use strict';
    angular.module('ControleEquipeApp').factory('AtividadeService', AtividadeService);

    AtividadeService.$inject = ['$http'];

    //    var host = "localhost";
    var host = "172.18.28.73";

    function AtividadeService($http) {

        var service = {
            getAtividades: getAtividades,
            addAtividade: addAtividade,
            updateAtividade: updateAtividade,
            deleteAtividade: deleteAtividade
        };
        return service;

        function getAtividades() {
            return $http.get('http://' + host + '/ControleEquipe/rest-api/atividades');
        }

        function addAtividade(atividade) {
            return $http.post('http://' + host + '/ControleEquipe/rest-api/atividades', atividade);
        }

        function updateAtividade(atividade) {
            return $http.put('http://' + host + '/ControleEquipe/rest-api/atividades/' + atividade.idatividade, atividade);
        }

        function deleteAtividade(idatividade) {
            return $http.delete('http://' + host + '/ControleEquipe/rest-api/atividades/' + idatividade);
        }
    }
}());
