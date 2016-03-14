(function () {
    'use strict';
    angular.module('ControleEquipeApp').factory('RecursoService', RecursoService);

    RecursoService.$inject = ['$http'];

    //    var host = "localhost";
    var host = "172.18.28.73";

    function RecursoService($http) {

        var service = {
            getRecursos: getRecursos,
            addRecurso: addRecurso,
            updateRecurso: updateRecurso,
            deleteRecurso: deleteRecurso
        };
        return service;

        function getRecursos() {
            return $http.get('http://' + host + '/ControleEquipe/rest-api/recursos');
        }

        function addRecurso(recurso) {
            return $http.post('http://' + host + '/ControleEquipe/rest-api/recursos', recurso);
        }

        function updateRecurso(recurso) {
            return $http.put('http://' + host + '/ControleEquipe/rest-api/recursos/' + recurso.idrecurso, recurso);
        }

        function deleteRecurso(idrecurso) {
            return $http.delete('http://' + host + '/ControleEquipe/rest-api/recursos/' + idrecurso);
        }
    }

}());
