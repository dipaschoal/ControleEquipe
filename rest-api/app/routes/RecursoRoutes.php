<?php

require "app/controllers/RecursoController.php";

use App\Controller\RecursoController;

$recursoController = new RecursoController();

$app->get('/recursos', function() use($recursoController){
    $recursoController->getRecursos();
});

$app->post('/recursos', function() use($recursoController){
    $recursoController->addRecurso();
});

$app->put('/recursos/:idrecurso', function($idrecurso) use($recursoController){
    $recursoController->updateRecurso($idrecurso);
});

$app->delete('/recursos/:idrecurso', function($idrecurso) use($recursoController){
    $recursoController->deleteRecurso($idrecurso);
});

?>
