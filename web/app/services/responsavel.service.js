(function () {
    'use strict';
    angular.module('ControleEquipeApp').factory('ResponsavelService', ResponsavelService);

    ResponsavelService.$inject = ['$http'];

    function ResponsavelService($http) {

        var service = {
            getResponsaveis: getResponsaveis
        };
        return service;

        function getResponsaveis() {
            return $http.get('http://localhost/ControleEquipe/rest-api/responsaveis');
        }
    }

}());
