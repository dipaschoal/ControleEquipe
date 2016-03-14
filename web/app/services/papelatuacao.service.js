(function () {
    'use strict';
    angular.module('ControleEquipeApp').factory('PapelAtuacaoService', PapelAtuacaoService);

    PapelAtuacaoService.$inject = ['$http'];

    //    var host = "localhost";
    var host = "172.18.28.73";

    function PapelAtuacaoService($http) {

        var service = {
            getPapeisAtuacao: getPapeisAtuacao
        };
        return service;

        function getPapeisAtuacao() {
            return $http.get('http://' + host + '/ControleEquipe/rest-api/papeisAtuacao');
        }
    }

}());
