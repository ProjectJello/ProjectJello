<?php

require 'FileIO.php';


function user_file($filepath, $username){
	return $filepath . 'users/' . $username . '.txt';
}

function project_file($filepath, $projectId){
	return $filepath . 'projects/project_' . $projectId . '/data.txt';
}

function create_user($filepath, $username){
	if(read_file(user_file($filepath, $username)) == ''){
		$data = '{"name":"'.$username.'","projects":[]}';
		write_file(user_file($filepath, $username), $data);
		return $data;
	}else
		return 'ERROR{"Error":"User already exists"}';
}

function read_user($filepath, $username){
	$data = read_file(user_file($filepath, $username), false);
	if( $data != ''){
		return $data;
	}else{
		echo 'ERROR{"Error":"User does not exist"}';
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
		if($lp[0] === '['){
			echo "ERROR";
			return $json;
		}
		
		$projEnd = leastPos(strpos($lp, ','), strpos($lp, '}'));
		$lp = substr($lp, $projEnd);
		return $fp . $val . $lp;
}

function add_to_json_aray($json, $feild, $val){
		$projects = strpos($json, '"'.$feild.'":[') + strlen('"'.$feild.'":[');
		$fp = substr($json, 0, $projects);
		$lp = substr($json, $projects);
		$projEnd = strpos($lp, ']');
		$projp = substr($lp, 0, $projEnd + 1);
		$fp = $fp . $val;
		if(strlen($projp) > 1)
			$fp =  $fp . ',';
		return $fp . $lp;
		
}

function remove_from_json_aray($json, $feild, $val){
		$projects = strpos($json, '"'.$feild.'":[') + strlen('"'.$feild.'":[');
		$fp = substr($json, 0, $projects);
		$lp = substr($json, $projects);
		$projEnd = strpos($lp, ']');
		$projp = substr($lp, 0, $projEnd + 1);
		$lp = substr($lp, $projEnd + 1);
		$projp = str_replace($val . ',', '', $projp);
		$projp = str_replace(', '.$val, '', $projp);
		$projp = str_replace($val, '', $projp);
		
		return $fp . $projp .  $lp;
		
}

function create_project($filepath, $username, $projectname){
	$user = read_user($filepath, $username);
	if($user){
		$index = read_file($filepath . 'projects/ProjectCounter.txt');
		if($index == '')
			$index = 0;
		$data = '{"name":"'.$projectname.'","owner":"'.$username.'","description":"","member":["'.$username.'"],"tasks":[],"risks":[]}';
		write_file(project_file($filepath, $projectId), $data);
		$user = add_to_json_aray($user, 'projects', $index);
		write_file(user_file($filepath, $username), $user);
		write_file($filepath . 'projects/ProjectCounter.txt', $index + 1);
		return $data;
	}else{
		echo 'ERROR{"Error":"User does not exist"}';
	}
	
}

function read_project($filepath, $projectId){
	$data = read_file(project_file($filepath, $projectId), false);
	if( $data != ''){
		return $data;
	}else{
		//delete_file($filepath . 'projects/project_' . $projectId);
		echo 'ERROR{"Error":"Project does not exist"}';
	}
}

function update_project($filepath, $projectId, $feild, $value){
	$data = read_file(project_file($filepath, $projectId));
	if( $data != ''){
		$data = update_json_field($data, $feild, $value);
		write_file(project_file($filepath, $projectId), 
		$data);
		return $data;
	}else{
		return 'ERROR{"Error":"Project does not exist"}';
	}
}

function add_user_to_project($filepath, $projectId, $username){
	$data = read_file(project_file($filepath, $projectId));
	if( $data != ''){
		if(read_file(user_file($filepath, $username)) != ''){
			$data = add_to_json_aray($data, "member", '"'.$username.'"');
			write_file(project_file($filepath, $projectId), $data);
			return $data;
		}else{
			return 'ERROR{"Error":"User does not exist"}';
		}
	}else{
		return 'ERROR{"Error":"Project does not exist"}';
	}
}

function add_project_to_user($filepath, $projectId, $username){
	$data = read_file(user_file($filepath, $username));
	if( $data != ''){
		if(read_file(project_file($filepath, $projectId)) != ''){
			$data = add_to_json_aray($data, "projects", '"'.$projectId.'"');
			write_file(user_file($filepath, $username), $data);
			return $data;
		}else{
			return 'ERROR{"Error":"Project does not exist"}';
		}
	}else{
		return 'ERROR{"Error":"User does not exist"}';
	}
}


function remove_user_from_project($filepath, $projectId, $username){
	$data = read_file(project_file($filepath, $projectId));
	if( $data != ''){
		if(read_file(user_file($filepath, $username)) != ''){
			$data = remove_from_json_aray($data, "member", '"'.$username.'"');
			write_file(project_file($filepath, $projectId), $data);
			return $data;
		}else{
			return 'ERROR{"Error":"User does not exist"}';
		}
	}else{
		return 'ERROR{"Error":"Project does not exist"}';
	}
}

function remove_project_from_user($filepath, $projectId, $username){
	$data = read_file(user_file($filepath, $username));
	if( $data != ''){
		if(read_file(project_file($filepath, $projectId)) != ''){
			$data = remove_from_json_aray($data, "projects", '"'.$projectId.'"');
			write_file(user_file($filepath, $username), $data);
			return $data;
		}else{
			return 'ERROR{"Error":"Project does not exist"}';
		}
	}else{
		return 'ERROR{"Error":"User does not exist"}';
	}
}

// Just sending a basic JSON response to confirm all works.
//header('Content-Type: application/json');
//echo json_encode(Array('message', 'Hello World'));
$filepath = "/var/www/ProjectJello/Data/";

$request = "not found";
if(array_key_exists('request',$_GET))
	$request = $_GET['request'];
//echo remove_from_json_aray('{"name":"raspberry", "arr":["oranges", "raspberry", "apples", "raspberry"]}', "arr", '"raspberry"');
//Mode READ, WRITE, DELETE
$mode = "not found";
if(array_key_exists('mode',$_GET))
	$mode = $_GET['mode'];
switch($request){
	case 'user':
		switch($mode){
			case 'new': echo create_user($filepath, $_GET['usern']);
		break;
			case 'read': echo read_user($filepath, $_GET['usern']);
		break;
			case 'addup': add_user_to_project($filepath, $_GET['projId'], $_GET['usern']);
			echo add_project_to_user($filepath, $_GET['projId'], $_GET['usern']);
		break;
			case 'removeup': remove_user_from_project($filepath, $_GET['projId'], $_GET['usern']);
			echo remove_project_from_user($filepath, $_GET['projId'], $_GET['usern']);
		break;
			case 'delete': //echo read_user($filepath, $_GET['usern']);
		break;
		default: 
			echo 'ERROR{"Error":"invalid mode ['.$mode.']"}';
		}
	break;
	
	case 'project':
		switch($mode){
			case 'new': echo create_project($filepath, $_GET['usern'], $_GET['projn']);
		break;
			case 'read': echo read_project($filepath, $_GET['projId']);
		break;
			case 'update': echo update_project($filepath, $_GET['projId'], $_GET['field'], $_GET['val']);
		break;
			case 'addup': add_project_to_user($filepath, $_GET['projId'], $_GET['usern']);
			echo add_user_to_project($filepath, $_GET['projId'], $_GET['usern']);
		break;
			case 'removeup': remove_project_from_user($filepath, $_GET['projId'], $_GET['usern']);
			echo remove_user_from_project($filepath, $_GET['projId'], $_GET['usern']);
		break;
		default: 
			echo 'ERROR{"Error":"invalid mode ['.$mode.']"}';
		}
	break;
	
	case 'task':
	break;
	
	case 'risk':
	break;
	
	default:
	echo 'ERROR{"Error":"request not found"}';
	
}
return;

?>
