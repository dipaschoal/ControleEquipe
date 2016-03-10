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

            $sth = $connection->prepare("SELECT * FROM recurso");
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
        }
    }
}
?>
