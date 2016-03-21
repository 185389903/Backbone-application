<?php
	class linkDatabase{
   	   private $mysqli;
   	   public function __construct($fun){
   	   		$this->linkDataFun($fun);
   	   }
   	   private function linkDataFun($fun){
	   		$this->mysqli=new mysqli("127.0.0.1","root","123456","qiyewang");
	   		if(mysqli_connect_errno()){
	   			die("链接数据库出错").myslqi_connect_error();
	   		}else{
	   			$fun($this->mysqli);
	   		}
   	   }
   }
?>