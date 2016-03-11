<?php

require "app/controllers/AtividadeController.php";

use App\Controller\AtividadeController;

$atividadeController = new AtividadeController();

$app->get('/atividades', function() use($atividadeController){
    $atividadeController->getAtividades();
});

$app->post('/atividades', function() use($atividadeController){
    $atividadeController->addAtividade();
});

$app->put('/atividades/:idatividade', function($idatividade) use($atividadeController){
    $atividadeController->updateAtividade($idatividade);
});

$app->delete('/atividades/:idatividade', function($idatividade) use($atividadeController){
    $atividadeController->deleteAtividade($idatividade);
});

?>
