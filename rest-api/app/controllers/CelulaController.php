<?php
namespace App\Controller;

require_once "app/providers/PDOProvider.php";

    use App\Provider\PDOProvider;
    use \PDO;
    use \PDOException;

class CelulaController {

//	private $app;
    
	public function __construct() {
//        $this->app = \Slim\Slim::getInstance();
    }

    function getCelulas() {
        
        $app = \Slim\Slim::getInstance();
        $connection = PDOProvider::getConnection();
        
        try{

            $sth = $connection->prepare("SELECT * FROM celula");
            $sth->execute();

            $celulas = $sth->fetchAll(PDO::FETCH_OBJ);

            if($celulas) {
                $app->response->setStatus(200);
                $app->response()->headers->set('Content-Type', 'application/json');

                $app->response->setBody(json_encode($celulas,JSON_PRETTY_PRINT | JSON_NUMERIC_CHECK));

                $connection = null;
            } else {
                $app->response()->setStatus(204);
                throw new PDOException('No records found.');
            }
        } catch(PDOException $e) {
            echo '{"error":{"text":'. $e->getMessage() .'}}';
        }
    }
}
?>
