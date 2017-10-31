<?php

require 'FileIO.php';


function create_user($filepath, $username){
	if(read_file($filepath . 'users/' . $username . '.txt') == '')
		write_file($filepath . 'users/' . $username . '.txt', '{"name":"'.$username.'","projects":[]}');
	else
		echo '{"Error":"User already exists"}';
}

function read_user($filepath, $username){
	$data = read_file($filepath . 'users/' . $username . '.txt');
	if( $data != ''){
		return $data;
	}else{
		delete_file($filepath . 'users/' . $username . '.txt');
		echo '{"Error":"User does not exist"}';
		return false;
	}
}

function leastPos($a, $b){
	if($b === false)
		return $a;
	if($a === false)
		return $b;
	
	if($a < $b)
		return $a;
	return $b;
	
	
}

function update_json_field($json, $feild, $val){
		$followfeild = strpos($json, '"'.$feild.'":') + strlen('"'.$feild.'":');
		$fp = substr($json, 0, $followfeild);
		$lp = substr($json, $followfeild);
		$projEnd = leastPos(strpos($lp, ','), strpos($lp, '}'));
		$lp = substr($lp, $projEnd);
		return $fp . $val . $lp;
}

function add_to_json_aray($json, $feild, $val){
		$projects = strpos($json, ',"'.$feild.'":[') + strlen(',"'.$feild.'":[');
		$fp = substr($json, 0, $projects);
		$lp = substr($json, $projects);
		$projEnd = strpos($lp, ']');
		$projp = substr($lp, 0, $projEnd + 1);
		$fp = $fp . $val;
		if(strlen($projp) > 1)
			$fp =  $fp . ',';
		return $fp . $lp;
		
}

function create_project($filepath, $username, $projectname){
	$user = read_user($filepath, $username);
	if($user){
		$index = read_file($filepath . 'projects/ProjectCounter.txt');
		if($index == '')
			$index = 0;
		write_file($filepath . 'projects/project_' . $index . '/data.txt', 
			'{"name":"'.$projectname.'","owner":"'.$username.'","description":"","member":["'.$username.'"],"tasks":[],"risks":[]}');
		$user = add_to_json_aray($user, 'projects', $index);
		write_file($filepath . 'users/' . $username . '.txt', $user);
		write_file($filepath . 'projects/ProjectCounter.txt', $index + 1);
	}else{
		echo '{"Error":"User does not exist"}';
		return false;
	}
	
}

function read_project($filepath, $projectId){
	$data = read_file($filepath . 'projects/project_' . $projectId . '/data.txt');
	if( $data != ''){
		return $data;
	}else{
		delete_file($filepath . 'projects/project_' . $projectId . '/data.txt');
		delete_file($filepath . 'projects/project_' . $projectId . '/');
		echo '{"Error":"Project does not exist"}';
		return false;
	}
}

function update_project($filepath, $projectId, $feild, $value){
	$data = read_file($filepath . 'projects/project_' . $projectId . '/data.txt');
	if( $data != ''){
		write_file($filepath . 'projects/project_' . $projectId . '/data.txt', 
		update_json_field($data, $feild, $value));
	}else{
		delete_file($filepath . 'projects/project_' . $projectId . '/data.txt');
		delete_file($filepath . 'projects/project_' . $projectId . '/');
		echo '{"Error":"Project does not exist"}';
		return false;
	}
}

// Just sending a basic JSON response to confirm all works.
//header('Content-Type: application/json');
//echo json_encode(Array('message', 'Hello World'));
$filepath = "/var/www/ProjectJello/Data/";
$request = $_GET['request'];

//Mode READ, WRITE, DELETE
$mode = $_GET['mode'];
switch($request){
	case 'user':
		switch($mode){
			case 'new': create_user($filepath, $_GET['usern']);
		break;
			case 'read': echo read_user($filepath, $_GET['usern']);
		break;
		default: 
			echo '{"Error":"invalid mode ['.$mode.']"}';
		}
	break;
	
	case 'project':
		switch($mode){
			case 'new': create_project($filepath, $_GET['usern'], $_GET['projn']);
		break;
			case 'read': echo read_project($filepath, $_GET['projId']);
		break;
			case 'update': update_project($filepath, $_GET['projId'], $_GET['field'], $_GET['value']);
		default: 
			echo '{"Error":"invalid mode ['.$mode.']"}';
		}
	break;
	
	case 'task':
	break;
	
	case 'risk':
	break;
	
	default:
	echo '{"Error":"request not found"}';
	
}
return;

?>
