<?php

require "app/controllers/AtividadeRecursoController.php";

use App\Controller\AtividadeRecursoController;

$atividadeRecursoController = new AtividadeRecursoController();

$app->get('/atividadesRecurso', function() use($atividadeRecursoController){
    $atividadeRecursoController->getAtividadesRecurso();
});

?>
