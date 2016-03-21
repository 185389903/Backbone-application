<?php
	header("Content-Type:application/json;charset=utf-8");
	include("link.php");
	new linkDatabase(function($mysqli){
		$page=$_GET['page'];
		$total=$_GET['total'];
		$sql="select * from new order by id desc limit ".$page.",".$total."";
		$sqlQuery=$mysqli->query($sql);
		$dataArr=array();
		$dataArr2=array();
		$dataArr2['name']="汤兴平";
		while($row=mysqli_fetch_assoc($sqlQuery)){
			$row['name']=$dataArr2;
			array_push($dataArr,$row);
		};
		echo json_encode($dataArr);
	});
?>