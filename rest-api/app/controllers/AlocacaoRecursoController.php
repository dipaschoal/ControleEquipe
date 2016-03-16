<?php
namespace App\Controller;

require_once "app/providers/PDOProvider.php";

    use App\Provider\PDOProvider;
    use \PDO;
    use \PDOException;

class AlocacaoRecursoController {

//	private $app;

	public function __construct() {
//        $this->app = \Slim\Slim::getInstance();
    }

    function getAlocacoesRecurso() {

        $app = \Slim\Slim::getInstance();
        $connection = PDOProvider::getConnection();

        try{

            $sth = $connection->prepare("SELECT alocacaorecurso.idalocacaorecurso
                                                ,alocacaorecurso.idalocacao
                                                ,alocacao.nomealocacao
                                                ,alocacaorecurso.idrecurso
                                                ,recurso.nomerecurso
                                                ,alocacaorecurso.idpapelatuacao
                                                ,papelatuacao.descricaopapel
                                                ,alocacaorecurso.flagpontofocal
                                                ,alocacaorecurso.flagalocacaorecursoativa
                                                ,alocacaorecurso.datainicioalocacao
                                                ,alocacaorecurso.datafimalocacao
                                                ,alocacaorecurso.quantidadehoras
                                                ,(lancamento.idalocacaorecurso) IS NOT NULL AS flagAlocacaoRecursoLancada
                                            FROM alocacaorecurso INNER JOIN alocacao
                                                ON alocacaorecurso.idalocacao = alocacao.idalocacao
                                            INNER JOIN recurso
                                                ON alocacaorecurso.idrecurso = recurso.idrecurso
                                            INNER JOIN papelatuacao
                                                ON alocacaorecurso.idpapelatuacao = papelatuacao.idpapelatuacao
                                            LEFT JOIN lancamento
                                                ON alocacaorecurso.idalocacaorecurso = lancamento.idalocacaorecurso");

            $sth->execute();

            $alocacoesRecurso = $sth->fetchAll(PDO::FETCH_OBJ);

            if($alocacoesRecurso) {
                $app->response->setStatus(200);
                $app->response()->headers->set('Content-Type', 'application/json');
                echo json_encode($alocacoesRecurso );
                $connection = null;
            } else {
                $app->response()->setStatus(204);
                throw new PDOException('No records found.');
            }
        } catch(PDOException $e) {
            echo '{"error":{"text":'. $e->getMessage() .'}}';
        }
    }

    function addAlocacaoRecurso(){

        $app = \Slim\Slim::getInstance();
        $request = $app->request();
        $body = $request->getBody();

        $alocacaoRecurso = json_decode($body);

        $connection = PDOProvider::getConnection();

        try {

            $sth = $connection->prepare("INSERT INTO alocacaorecurso
                                                (idalocacao
                                                ,idrecurso
                                                ,idpapelatuacao
                                                ,flagpontofocal
                                                ,flagalocacaorecursoativa
                                                ,datainicioalocacao
                                                ,datafimalocacao
                                                ,quantidadehoras)
                                            VALUES
                                            (:idalocacao
                                            ,:idrecurso
                                            ,:idpapelatuacao
                                            ,:flagpontofocal
                                            ,:flagalocacaorecursoativa
                                            ,:datainicioalocacao
                                            ,:datafimalocacao
                                            ,:quantidadehoras)");

            $sth->bindParam('idalocacao',               $alocacaoRecurso->idalocacao);
            $sth->bindParam('idrecurso',                $alocacaoRecurso->idrecurso);
            $sth->bindParam('idpapelatuacao',           $alocacaoRecurso->idpapelatuacao);
            $sth->bindParam('flagpontofocal',           $alocacaoRecurso->flagpontofocal);
            $sth->bindParam('flagalocacaorecursoativa', $alocacaoRecurso->flagalocacaorecursoativa);
            $sth->bindParam('datainicioalocacao',       $alocacaoRecurso->datainicioalocacao);
            $sth->bindParam('datafimalocacao',          $alocacaoRecurso->datafimalocacao);
            $sth->bindParam('quantidadehoras',          $alocacaoRecurso->quantidadehoras);


            $sth->execute();
            $alocacaoRecurso->idalocacaorecurso = $connection->lastInsertId();

            $app->response->setStatus(201);
            $app->response()->headers->set('Content-Type', 'application/json');

            $connection = null;

            echo json_encode($alocacaoRecurso);

        } catch(PDOException $e) {
            $app->response()->setStatus(400);
            echo '{"error":{"text":'. $e->getMessage() .'}}';
        }
    }

    function updateAlocacaoRecurso($idalocacaorecurso){

        $app = \Slim\Slim::getInstance();
        $request = $app->request();
        $body = $request->getBody();

        $alocacaoRecurso = json_decode($body);

        $connection = PDOProvider::getConnection();

        try {

            $sth = $connection->prepare("UPDATE alocacaorecurso SET
                                             idalocacao = :idalocacao
                                            ,idrecurso = :idrecurso
                                            ,idpapelatuacao = :idpapelatuacao
                                            ,flagpontofocal = :flagpontofocal
                                            ,flagalocacaorecursoativa = :flagalocacaorecursoativa
                                            ,datainicioalocacao = :datainicioalocacao
                                            ,datafimalocacao = :datafimalocacao
                                            ,quantidadehoras = :quantidadehoras
                                        WHERE idalocacaorecurso = :idalocacaorecurso");

            $sth->bindParam('idalocacao',               $alocacaoRecurso->idalocacao);
            $sth->bindParam('idrecurso',                $alocacaoRecurso->idrecurso);
            $sth->bindParam('idpapelatuacao',           $alocacaoRecurso->idpapelatuacao);
            $sth->bindParam('flagpontofocal',           $alocacaoRecurso->flagpontofocal);
            $sth->bindParam('flagalocacaorecursoativa', $alocacaoRecurso->flagalocacaorecursoativa);
            $sth->bindParam('datainicioalocacao',       $alocacaoRecurso->datainicioalocacao);
            $sth->bindParam('datafimalocacao',          $alocacaoRecurso->datafimalocacao);
            $sth->bindParam('quantidadehoras',          $alocacaoRecurso->quantidadehoras);
            $sth->bindParam('idalocacaorecurso',        $idalocacaorecurso);

            $sth->execute();

            $app->response->setStatus(201);
            $app->response()->headers->set('Content-Type', 'application/json');

            $connection = null;

            echo json_encode($alocacaoRecurso);

        } catch(PDOException $e) {
            $app->response()->setStatus(400);
            echo '{"error":{"text":'. $e->getMessage() .'}}';
        }
    }

    function deleteAlocacaoRecurso($idalocacaorecurso){

        $app = \Slim\Slim::getInstance();

        $connection = PDOProvider::getConnection();

        try {

            $sth = $connection->prepare("DELETE FROM alocacaorecurso
                                            WHERE idalocacaorecurso = :idalocacaorecurso");

            $sth->bindParam('idalocacaorecurso',  $idalocacaorecurso);

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
