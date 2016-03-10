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

?>
