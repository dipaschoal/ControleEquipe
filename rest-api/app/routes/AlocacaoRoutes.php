<?php

require "app/controllers/AlocacaoController.php";

use App\Controller\AlocacaoController;

$alocacaoController = new AlocacaoController();

$app->get('/alocacoes', function() use($alocacaoController){
    $alocacaoController->getAlocacoes();
});

$app->post('/alocacoes', function() use($alocacaoController){
    $alocacaoController->addAlocacao();
});

$app->put('/alocacoes/:idalocacao', function($idalocacao) use($alocacaoController){
    $alocacaoController->updateAlocacao($idalocacao);
});

$app->delete('/alocacoes/:idalocacao', function($idalocacao) use($alocacaoController){
    $alocacaoController->deleteAlocacao($idalocacao);
});

?>
