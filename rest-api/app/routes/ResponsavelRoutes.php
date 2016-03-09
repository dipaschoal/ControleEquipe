<?php

require "app/controllers/ResponsavelController.php";

use App\Controller\ResponsavelController;

$responsavelController = new ResponsavelController();

$app->get('/responsaveis', function() use($responsavelController){
    $responsavelController->getResponsaveis();
});

?>
