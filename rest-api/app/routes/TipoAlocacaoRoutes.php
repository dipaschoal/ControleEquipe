<?php

require "app/controllers/TipoAlocacaoController.php";

use App\Controller\TipoAlocacaoController;

$tipoAlocacaoController = new TipoAlocacaoController();

$app->get('/tiposAlocacao', function() use($tipoAlocacaoController){
    $tipoAlocacaoController->getTiposAlocacao();
});

?>
