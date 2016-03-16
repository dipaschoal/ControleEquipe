<?php

require "app/controllers/AlocacaoRecursoController.php";

use App\Controller\AlocacaoRecursoController;

$alocacaoRecursoController = new AlocacaoRecursoController();

$app->get('/alocacoesRecurso', function() use($alocacaoRecursoController){
    $alocacaoRecursoController->getAlocacoesRecurso();
});

$app->post('/alocacoesRecurso', function() use($alocacaoRecursoController){
    $alocacaoRecursoController->addAlocacaoRecurso();
});

$app->put('/alocacoesRecurso/:idalocacaorecurso', function($idalocacaorecurso) use($alocacaoRecursoController){
    $alocacaoRecursoController->updateAlocacaoRecurso($idalocacaorecurso);
});

$app->delete('/alocacoesRecurso/:idalocacaorecurso', function($idalocacaorecurso) use($alocacaoRecursoController){
    $alocacaoRecursoController->deleteAlocacaoRecurso($idalocacaorecurso);
});

?>
