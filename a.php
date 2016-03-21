<?php  
   header("Content-Type:application/json;charset=utf-8");   
   include("link.php");
   $linkDataObject=new linkDatabase(function($mysqli){
   		//
	   	$val=json_decode(file_get_contents("php://input"));
	   	$type=$_SERVER['REQUEST_METHOD'];
		if($type=="DELETE"){
			$ids=explode("/",$_SERVER['QUERY_STRING']);
			$ids_=$ids[count($ids)-1];
			$delete="delete from name where id=".$ids_."";
			$mysqli->query($delete);
		}
		//
		if($type=="POST"){
			$sqlString="insert into name(title) values('{$val->name}')";
		   	$mysqli->query($sqlString);

		   	$id=mysqli_insert_id($mysqli);
		   	$sqlQ="select * from name where id=".$id."";
		   	$queryData=$mysqli->query($sqlQ);

		   	$arr=array();
		   	$arr2=array();
		   	while($row=mysqli_fetch_assoc($queryData)){
				$arr['name']=$row['name'];
				$arr['id']=$row['id'];
				$arr['done']=$row['checked'];
				$arr['title']=$row['title'];
				
			}
		   	$json=json_encode($arr);
		   	echo $json;
		}

		//添加
		
	
	   	if($type=="GET"){
	   		//
	   		$querySql="select * from name";
	   		$queryRes=$mysqli->query($querySql);
	   		$arrQ1=array();
	   		$arrQ2=array();
	   		while($row2=mysqli_fetch_assoc($queryRes)){
	   			$arrQ1['name']=$row2['name'];
				$arrQ1['id']=$row2['id'];
				$arrQ1['done']=$row2['checked'];
				$arrQ1['title']=$row2['title'];
				array_push($arrQ2,$arrQ1);
	   		};
	   		echo json_encode($arrQ2);
	   			//添加了一个注释2
	   	}
	   	if($type=="PUT"){
	   		$ids=explode("/",$_SERVER['QUERY_STRING']);
			$ids_=$ids[count($ids)-1];
			$upload="update name set name='{$val->name}',checked='{$val->done}',title='{$val->title}' where id='{$val->id}'";
			$mysqli->query($upload);
	   		echo "PUT";
	   	}
	   	
   });
?> 
