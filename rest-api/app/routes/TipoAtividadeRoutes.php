<?php

require "app/controllers/TipoAtividadeController.php";

use App\Controller\TipoAtividadeController;

$tipoAtividadeController = new TipoAtividadeController();

$app->get('/tiposAtividade', function() use($tipoAtividadeController){
    $tipoAtividadeController->getTiposAtividade();
});

?>
