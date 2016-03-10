<?php
namespace App\Controller;

require_once "app/providers/PDOProvider.php";

    use App\Provider\PDOProvider;
    use \PDO;
    use \PDOException;

class LancamentoController {

//	private $app;
    
	public function __construct() {
//        $this->app = \Slim\Slim::getInstance();
    }

    function getLancamentos() {
        
        $app = \Slim\Slim::getInstance();
        $connection = PDOProvider::getConnection();
        
        try{

            $sth = $connection->prepare("SELECT * FROM lancamento");
            $sth->execute();

            $lancamentos = $sth->fetchAll(PDO::FETCH_OBJ);

            if($lancamentos) {
                $app->response->setStatus(200);
                $app->response()->headers->set('Content-Type', 'application/json');
                echo json_encode($lancamentos);
                $connection = null;
            } else {
                $app->response()->setStatus(204);
                echo ("No records found.");
//                throw new PDOException('No records found.');
            }
        } catch(PDOException $e) {
            echo '{"error":{"text":'. $e->getMessage() .'}}';
        }
    }
}
?>
