(function () {
    'use strict';
    angular.module('ControleEquipeApp').factory('AlocacaoRecursoService', AlocacaoRecursoService);

    AlocacaoRecursoService.$inject = ['$http'];

    //    var host = "localhost";
    var host = "172.18.28.73";

    function AlocacaoRecursoService($http) {

        var service = {
            getAlocacoesRecurso: getAlocacoesRecurso
        };
        return service;

        function getAlocacoesRecurso() {
            return $http.get('http://' + host + '/ControleEquipe/rest-api/alocacoesRecurso');
        }
    }

}());
