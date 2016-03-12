(function () {
    'use strict';
    angular.module('ControleEquipeApp').factory('RecursoService', RecursoService);

    RecursoService.$inject = ['$http'];

    function RecursoService($http) {

        var service = {
            getRecursos: getRecursos,
            addRecurso: addRecurso,
            updateRecurso: updateRecurso,
            deleteRecurso: deleteRecurso
        };
        return service;

        function getRecursos() {
            return $http.get('http://localhost/ControleEquipe/rest-api/recursos');
        }

        function addRecurso(recurso) {
            return $http.post('http://localhost/ControleEquipe/rest-api/recursos', recurso);
        }

        function updateRecurso(recurso) {
            return $http.put('http://localhost/ControleEquipe/rest-api/recursos/' + recurso.idrecurso, recurso);
        }

        function deleteRecurso(idrecurso) {
            return $http.delete('http://localhost/ControleEquipe/rest-api/recursos/' + idrecurso);
        }
    }

}());
