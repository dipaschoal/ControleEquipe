(function () {
    'use strict';
    angular.module('ControleEquipeApp').factory('FaseService', FaseService);

    FaseService.$inject = ['$http'];

        var host = "localhost";
//    var host = "172.18.28.73";

    function FaseService($http) {

        var service = {
            getFases: getFases
        };
        return service;

        function getFases() {
            return $http.get('http://' + host + '/ControleEquipe/rest-api/fases');
        }
    }

}());
