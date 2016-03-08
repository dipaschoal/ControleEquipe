<?php
namespace App\Provider;

use \PDO;

class PDOProvider {
    
    private static $connection;
    
    function createConnection(){

        $dbhost = "localhost";
        $dbuser = "root";
        $dbpass = "";
        $dbname = "mydb";

        $mysql_conn_string = "mysql:host=$dbhost;dbname=$dbname";

        $connection = new PDO($mysql_conn_string, $dbuser, $dbpass); 
        $connection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

        $connection->exec("SET CHARACTER SET utf8");

        return $connection;
    }
    
    public static function getConnection() {
        if(!isset(self::$connection)) {
            self::$connection = self::createConnection();
        }
        return self::$connection;
    }
}
?>
