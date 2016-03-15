(function () {
    'use strict';
    angular.module('ControleEquipeApp').factory('AlocacaoService', AlocacaoService);

    AlocacaoService.$inject = ['$http'];

    //    var host = "localhost";
    var host = "172.18.28.73";

    function AlocacaoService($http) {

        var service = {
            getAlocacoes: getAlocacoes,
            addAlocacao: addAlocacao,
            updateAlocacao: updateAlocacao,
            deleteAlocacao: deleteAlocacao
        };
        return service;

        function getAlocacoes() {
            return $http.get('http://' + host + '/ControleEquipe/rest-api/alocacoes');
        }

        function addAlocacao(alocacao) {
            return $http.post('http://' + host + '/ControleEquipe/rest-api/alocacoes', alocacao);
        }

        function updateAlocacao(alocacao) {
            return $http.put('http://' + host + '/ControleEquipe/rest-api/alocacoes/' + alocacao.idalocacao, alocacao);
        }

        function deleteAlocacao(idalocacao) {
            return $http.delete('http://' + host + '/ControleEquipe/rest-api/alocacoes/' + idalocacao);
        }
    }
}());
