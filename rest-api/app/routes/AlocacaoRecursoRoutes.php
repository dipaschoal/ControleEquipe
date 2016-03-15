<?php

require "app/controllers/AlocacaoRecursoController.php";

use App\Controller\AlocacaoRecursoController;

$alocacaoRecursoController = new AlocacaoRecursoController();

$app->get('/alocacoesRecurso', function() use($alocacaoRecursoController){
    $alocacaoRecursoController->getAlocacoesRecurso();
});

?>
