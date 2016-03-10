(function () {
    'use strict';
    angular.module('ControleEquipeApp').factory('TipoAtividadeService', TipoAtividadeService);

    TipoAtividadeService.$inject = ['$http'];

    function TipoAtividadeService($http) {

        var service = {
            getTiposAtividade: getTiposAtividade
        };
        return service;

        function getTiposAtividade() {
            return $http.get('http://localhost/ControleEquipe/rest-api/tiposAtividade');
        }
    }
}());
