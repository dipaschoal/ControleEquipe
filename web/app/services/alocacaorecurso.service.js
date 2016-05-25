(function () {
    'use strict';
    angular.module('ControleEquipeApp').factory('AlocacaoRecursoService', AlocacaoRecursoService);

    AlocacaoRecursoService.$inject = ['$http'];

        var host = "localhost";
//    var host = "172.18.28.73";

    function AlocacaoRecursoService($http) {

        var service = {
            getAlocacoesRecurso: getAlocacoesRecurso,
            addAlocacaoRecurso: addAlocacaoRecurso,
            updateAlocacaoRecurso: updateAlocacaoRecurso,
            deleteAlocacaoRecurso: deleteAlocacaoRecurso
        };
        return service;

        function getAlocacoesRecurso() {
            return $http.get('http://' + host + '/ControleEquipe/rest-api/alocacoesRecurso');
        }

        function addAlocacaoRecurso(alocacaorecurso) {
            return $http.post('http://' + host + '/ControleEquipe/rest-api/alocacoesRecurso', alocacaorecurso);
        }

        function updateAlocacaoRecurso(alocacaorecurso) {
            return $http.put('http://' + host + '/ControleEquipe/rest-api/alocacoesRecurso/' + alocacaorecurso.idalocacaorecurso, alocacaorecurso);
        }

        function deleteAlocacaoRecurso(idalocacaorecurso) {
            return $http.delete('http://' + host + '/ControleEquipe/rest-api/alocacoesRecurso/' + idalocacaorecurso);
        }
    }

}());
