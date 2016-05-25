(function () {
    'use strict';
    angular.module('ControleEquipeApp').factory('ResponsavelService', ResponsavelService);

    ResponsavelService.$inject = ['$http'];

        var host = "localhost";
//    var host = "172.18.28.73";

    function ResponsavelService($http) {

        var service = {
            getResponsaveis: getResponsaveis
        };
        return service;

        function getResponsaveis() {
            return $http.get('http://' + host + '/ControleEquipe/rest-api/responsaveis');
        }
    }

}());
