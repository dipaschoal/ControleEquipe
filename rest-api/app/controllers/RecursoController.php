<?php
namespace App\Controller;

require_once "app/providers/PDOProvider.php";

    use App\Provider\PDOProvider;
    use \PDO;
    use \PDOException;

class RecursoController {

//	private $app;
    
	public function __construct() {
//        $this->app = \Slim\Slim::getInstance();
    }

    function getRecursos() {
        
        $app = \Slim\Slim::getInstance();
        $connection = PDOProvider::getConnection();
        
        try{

            $sth = $connection->prepare("SELECT recurso.idrecurso
                                                ,recurso.nomerecurso
                                                ,recurso.emailrecurso
                                                ,recurso.idcelula
                                                ,celula.nomecelula
                                                ,recurso.idempresa
                                                ,empresa.nomeempresa
                                                ,recurso.idpapelatuacao
                                                ,papelatuacao.descricaopapel
                                                ,(alocacaorecurso.idrecurso) IS NOT NULL AS flagRecursoAlocado
                                            FROM recurso
                                            INNER JOIN celula
                                                ON recurso.idcelula = celula.idcelula
                                            INNER JOIN empresa
                                                ON recurso.idempresa = empresa.idempresa
                                            INNER JOIN papelatuacao
                                                ON recurso.idpapelatuacao = papelatuacao.idpapelatuacao
                                            LEFT JOIN alocacaorecurso
                                                ON recurso.idrecurso = alocacaorecurso.idrecurso");

            $sth->execute();

            $recursos = $sth->fetchAll(PDO::FETCH_OBJ);

            if($recursos) {
                $app->response->setStatus(200);
                $app->response()->headers->set('Content-Type', 'application/json');
                echo json_encode($recursos);
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

    function addRecurso(){

        $app = \Slim\Slim::getInstance();
        $request = $app->request();
        $body = $request->getBody();

        $recurso = json_decode($body);

        $connection = PDOProvider::getConnection();

        try {

            $sth = $connection->prepare("INSERT INTO recurso
                                                (nomerecurso
                                                ,emailrecurso
                                                ,idcelula
                                                ,idpapelatuacao
                                                ,idempresa)
                                            VALUES
                                                (:nomerecurso
                                                ,:emailrecurso
                                                ,:idcelula
                                                ,:idpapelatuacao
                                                ,:idempresa)");

            $sth->bindParam('nomerecurso',   $recurso->nomerecurso);
            $sth->bindParam('emailrecurso',  $recurso->emailrecurso);
            $sth->bindParam('idcelula',      $recurso->idcelula);
            $sth->bindParam('idpapelatuacao',$recurso->idpapelatuacao);
            $sth->bindParam('idempresa',     $recurso->idempresa);

            $sth->execute();
            $recurso->idrecurso = $connection->lastInsertId();

            $app->response->setStatus(201);
            $app->response()->headers->set('Content-Type', 'application/json');

            $connection = null;

            echo json_encode($recurso);

        } catch(PDOException $e) {
            $app->response()->setStatus(400);
            echo '{"error":{"text":'. $e->getMessage() .'}}';
        }
    }


    function updateRecurso($idrecurso){

        $app = \Slim\Slim::getInstance();
        $request = $app->request();
        $body = $request->getBody();

        $recurso = json_decode($body);

        $connection = PDOProvider::getConnection();

        try {

            $sth = $connection->prepare("UPDATE recurso SET
                                            nomerecurso = :nomerecurso
                                            ,emailrecurso = :emailrecurso
                                            ,idcelula = :idcelula
                                            ,idpapelatuacao = :idpapelatuacao
                                            ,idempresa = :idempresa
                                        WHERE idrecurso = :idrecurso");

            $sth->bindParam('nomerecurso',    $recurso->nomerecurso);
            $sth->bindParam('emailrecurso',   $recurso->emailrecurso);
            $sth->bindParam('idcelula',       $recurso->idcelula);
            $sth->bindParam('idpapelatuacao', $recurso->idpapelatuacao);
            $sth->bindParam('idempresa',      $recurso->idempresa);
            $sth->bindParam('idrecurso',      $idrecurso);

            $sth->execute();

            $app->response->setStatus(201);
            $app->response()->headers->set('Content-Type', 'application/json');

            $connection = null;

            echo json_encode($recurso);

        } catch(PDOException $e) {
            $app->response()->setStatus(400);
            echo '{"error":{"text":'. $e->getMessage() .'}}';
        }
    }

    function deleteRecurso($idrecurso){

        $app = \Slim\Slim::getInstance();

        $connection = PDOProvider::getConnection();

        try {

            $sth = $connection->prepare("DELETE FROM recurso
                                            WHERE idrecurso = :idrecurso");

            $sth->bindParam('idrecurso',  $idrecurso);

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
