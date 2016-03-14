(function () {
    'use strict';
    angular.module('ControleEquipeApp').factory('AtividadeRecursoService', AtividadeRecursoService);

    AtividadeRecursoService.$inject = ['$http'];

    //    var host = "localhost";
    var host = "172.18.28.73";

    function AtividadeRecursoService($http) {

        var service = {
            getAtividadesRecurso: getAtividadesRecurso
        };
        return service;

        function getAtividadesRecurso() {
            return $http.get('http://' + host + '/ControleEquipe/rest-api/atividadesRecurso');
        }
    }

}());
