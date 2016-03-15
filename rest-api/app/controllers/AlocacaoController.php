<?php
namespace App\Controller;

require_once "app/providers/PDOProvider.php";

    use App\Provider\PDOProvider;
    use \PDO;
    use \PDOException;

class AlocacaoController {

//	private $app;

	public function __construct() {
//        $this->app = \Slim\Slim::getInstance();
    }

    function getAlocacoes() {

        $app = \Slim\Slim::getInstance();
        $connection = PDOProvider::getConnection();

        try{

            $sth = $connection->prepare("SELECT alocacao.idalocacao
                                                ,alocacao.idtipoalocacao
                                                ,tipoalocacao.descricaotipoalocacao
                                                ,alocacao.nomealocacao
                                                ,alocacao.numeroalocacao
                                                ,alocacao.idfase
                                                ,fase.descricaofase
                                                ,alocacao.idresponsavel
                                                ,responsavel.nomeresponsavel
                                                ,alocacao.idcelula
                                                ,celula.nomecelula
                                                ,(alocacaorecurso.idalocacao) IS NOT NULL AS flagAlocacaoAlocada
                                        FROM alocacao
                                        INNER JOIN tipoalocacao
                                            ON alocacao.idtipoalocacao = tipoalocacao.idtipoalocacao
                                        INNER JOIN responsavel
                                            ON alocacao.idresponsavel = responsavel.idresponsavel
                                        INNER JOIN celula
                                            ON alocacao.idcelula = celula.idcelula
                                        LEFT JOIN fase
                                            ON alocacao.idfase = fase.idfase
                                        LEFT JOIN alocacaorecurso
                                            ON alocacao.idalocacao = alocacaorecurso.idalocacao");
            $sth->execute();

            $alocacoes = $sth->fetchAll(PDO::FETCH_OBJ);

            if($alocacoes) {
                $app->response->setStatus(200);
                $app->response()->headers->set('Content-Type', 'application/json');
                echo json_encode($alocacoes);
                $connection = null;
            } else {
                $app->response()->setStatus(204);
                throw new PDOException('No records found.');
            }
        } catch(PDOException $e) {
            echo '{"error":{"text":'. $e->getMessage() .'}}';
        } catch (Exception $e) {
            $app->response()->setStatus(404);
            echo '{"error":{"text":'. $e->getMessage() .'}}';
        }
    }

    function addAlocacao(){

        $app = \Slim\Slim::getInstance();
        $request = $app->request();
        $body = $request->getBody();

        $alocacao = json_decode($body);

        $connection = PDOProvider::getConnection();

        try {

            $sth = $connection->prepare("INSERT INTO alocacao
                                            (idtipoalocacao
                                            ,nomealocacao
                                            ,numeroalocacao
                                            ,idfase
                                            ,idresponsavel
                                            ,idcelula)
                                        VALUES
                                        (:idtipoalocacao
                                        ,:nomealocacao
                                        ,:numeroalocacao
                                        ,:idfase
                                        ,:idresponsavel
                                        ,:idcelula)");

            $sth->bindParam('idtipoalocacao',  $alocacao->idtipoalocacao);
            $sth->bindParam('nomealocacao',    $alocacao->nomealocacao);
            $sth->bindParam('idresponsavel',    $alocacao->idresponsavel);
            $sth->bindParam('idcelula',         $alocacao->idcelula);

            if($alocacao->idtipoalocacao == 1){
                $sth->bindParam('numeroalocacao',  $alocacao->numeroalocacao);
                $sth->bindParam('idfase',           $alocacao->idfase);
            }else{
                $null = null;
                $sth->bindParam('numeroalocacao',  $null);
                $sth->bindParam('idfase',           $null);
            }

            $sth->execute();
            $alocacao->idalocacao = $connection->lastInsertId();

            $app->response->setStatus(201);
            $app->response()->headers->set('Content-Type', 'application/json');

            $connection = null;

            echo json_encode($alocacao);

        } catch(PDOException $e) {
            $app->response()->setStatus(400);
            echo '{"error":{"text":'. $e->getMessage() .'}}';
        }
    }

    function updateAlocacao($idalocacao){

        $app = \Slim\Slim::getInstance();
        $request = $app->request();
        $body = $request->getBody();

        $alocacao = json_decode($body);

        $connection = PDOProvider::getConnection();

        try {

            $sth = $connection->prepare("UPDATE alocacao SET
                                             idtipoalocacao = :idtipoalocacao
                                            ,nomealocacao = :nomealocacao
                                            ,numeroalocacao = :numeroalocacao
                                            ,idfase = :idfase
                                            ,idresponsavel = :idresponsavel
                                            ,idcelula = :idcelula
                                        WHERE idalocacao = :idalocacao");

            $sth->bindParam('idtipoalocacao',  $alocacao->idtipoalocacao);
            $sth->bindParam('nomealocacao',    $alocacao->nomealocacao);
            $sth->bindParam('idresponsavel',    $alocacao->idresponsavel);
            $sth->bindParam('idcelula',         $alocacao->idcelula);
            $sth->bindParam('idalocacao',      $idalocacao);

            if($alocacao->idtipoalocacao == 1){
                $sth->bindParam('numeroalocacao',  $alocacao->numeroalocacao);
                $sth->bindParam('idfase',           $alocacao->idfase);
            }else{
                $null = null;
                $sth->bindParam('numeroalocacao',  $null);
                $sth->bindParam('idfase',           $null);
            }

            $sth->execute();

            $app->response->setStatus(201);
            $app->response()->headers->set('Content-Type', 'application/json');

            $connection = null;

            echo json_encode($alocacao);

        } catch(PDOException $e) {
            $app->response()->setStatus(400);
            echo '{"error":{"text":'. $e->getMessage() .'}}';
        }
    }

    function deleteAlocacao($idalocacao){

        $app = \Slim\Slim::getInstance();

        $connection = PDOProvider::getConnection();

        try {

            $sth = $connection->prepare("DELETE FROM alocacao
                                            WHERE idalocacao = :idalocacao");

            $sth->bindParam('idalocacao',  $idalocacao);

            $sth->execute();

            $app->response->setStatus(200);
            $app->response()->headers->set('Content-Type', 'application/json');

            $message = "Deletado com SUCESSO";
            $connection = null;

            echo '{"success":{"text":"'. $message .'"}}';

        } catch(PDOException $e) {
            $app->response()->setStatus(400);
            echo '{"error":{"text":'. $e->getMessage() .'}}';
        }
    }

}
?>
