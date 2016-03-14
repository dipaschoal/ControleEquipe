(function () {
    'use strict';
    angular.module('ControleEquipeApp').factory('LancamentoService', LancamentoService);

    LancamentoService.$inject = ['$http'];

    //    var host = "localhost";
    var host = "172.18.28.73";

    function LancamentoService($http) {

        var service = {
            getLancamentos: getLancamentos
        };
        return service;

        function getLancamentos() {
            return $http.get('http://' + host + '/ControleEquipe/rest-api/lancamentos');
        }
    }

}());
