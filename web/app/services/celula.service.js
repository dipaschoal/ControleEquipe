(function () {
    'use strict';
    angular.module('ControleEquipeApp').factory('CelulaService', CelulaService);

    CelulaService.$inject = ['$http'];

        var host = "localhost";
//    var host = "172.18.28.73";


    function CelulaService($http) {

        var service = {
            getCelulas: getCelulas
        };
        return service;

        function getCelulas() {
            return $http.get('http://' + host + '/ControleEquipe/rest-api/celulas');
        }
    }

}());
