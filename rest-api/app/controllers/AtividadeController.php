<?php
namespace App\Controller;

require_once "app/providers/PDOProvider.php";

    use App\Provider\PDOProvider;
    use \PDO;

class AtividadeController {

//	private $app;

	public function __construct() {
//        $this->app = \Slim\Slim::getInstance();
    }

    function getAtividades() {

        $app = \Slim\Slim::getInstance();
        $connection = PDOProvider::getConnection();

        try{

            $sth = $connection->prepare("SELECT * FROM atividade");
            $sth->execute();

            $atividades = $sth->fetchAll(PDO::FETCH_OBJ);

            if($atividades) {
                $app->response->setStatus(200);
                $app->response()->headers->set('Content-Type', 'application/json');
                echo json_encode($atividades);
                $connection = null;
            } else {
                $app->response()->setStatus(204);
                throw new PDOException('No records found.');
            }
        } catch(PDOException $e) {
            $app->response()->setStatus(404);
            echo '{"error":{"text":'. $e->getMessage() .'}}';
        }
    }

    function addAtividade(){

        $app = \Slim\Slim::getInstance();
        $request = $app->request();
        $body = $request->getBody();

        $atividade = json_decode(utf8_encode($body));

        $connection = PDOProvider::getConnection();

        try {

            $sth = $connection->prepare("INSERT INTO atividade
                                            (idtipoatividade
                                            ,nomeatividade
                                            ,numeroatividade
                                            ,idfase
                                            ,idresponsavel
                                            ,idcelula)
                                        VALUES
                                        (:idtipoatividade
                                        ,:nomeatividade
                                        ,:numeroatividade
                                        ,:idfase
                                        ,:idresponsavel
                                        ,:idcelula)");

            $sth->bindParam('idtipoatividade',  $atividade->idtipoatividade);
            $sth->bindParam('nomeatividade',    $atividade->nomeatividade);
            $sth->bindParam('idresponsavel',    $atividade->idresponsavel);
            $sth->bindParam('idcelula',         $atividade->idcelula);

            if($atividade->idtipoatividade == 1){
                $sth->bindParam('numeroatividade',  $atividade->numeroatividade);
                $sth->bindParam('idfase',           $atividade->idfase);
            }else{
                $null = null;
                $sth->bindParam('numeroatividade',  $null);
                $sth->bindParam('idfase',           $null);
            }

            $sth->execute();
            $atividade->idatividade = $connection->lastInsertId();

            $app->response->setStatus(201);
            $app->response()->headers->set('Content-Type', 'application/json');

            $connection = null;

            echo json_encode($atividade);

        } catch(PDOException $e) {
            $app->response()->setStatus(400);
            echo '{"error":{"text":'. $e->getMessage() .'}}';
        }
    }
}
?>
