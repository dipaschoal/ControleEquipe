(function () {
    'use strict';
    angular.module('ControleEquipeApp').factory('TipoAtividadeService', TipoAtividadeService);

    TipoAtividadeService.$inject = ['$http'];

    //    var host = "localhost";
    var host = "172.18.28.73";

    function TipoAtividadeService($http) {

        var service = {
            getTiposAtividade: getTiposAtividade
        };
        return service;

        function getTiposAtividade() {
            return $http.get('http://' + host + '/ControleEquipe/rest-api/tiposAtividade');
        }
    }
}());
