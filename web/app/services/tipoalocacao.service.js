(function () {
    'use strict';
    angular.module('ControleEquipeApp').factory('TipoAlocacaoService', TipoAlocacaoService);

    TipoAlocacaoService.$inject = ['$http'];

        var host = "localhost";
//    var host = "172.18.28.73";

    function TipoAlocacaoService($http) {

        var service = {
            getTiposAlocacao: getTiposAlocacao
        };
        return service;

        function getTiposAlocacao() {
            return $http.get('http://' + host + '/ControleEquipe/rest-api/tiposAlocacao');
        }
    }
}());
