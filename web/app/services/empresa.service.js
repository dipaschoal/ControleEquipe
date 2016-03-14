(function () {
    'use strict';
    angular.module('ControleEquipeApp').factory('EmpresaService', EmpresaService);

    EmpresaService.$inject = ['$http'];

    //    var host = "localhost";
    var host = "172.18.28.73";

    function EmpresaService($http) {

        var service = {
            getEmpresas: getEmpresas
        };
        return service;

        function getEmpresas() {
            return $http.get('http://' + host + '/ControleEquipe/rest-api/empresas');
        }
    }

}());
