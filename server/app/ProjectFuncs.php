<?php

/*
  {
  “name” : “PROJECT NAME”,
  "description" : "DESCRIPTION",
  “owner” : “USERNAME”,
  “members” : [“USERNAMES”],
  “tasks” : [],
  “risks” : []
  }
 */
 
 
function project_file($filepath, $projectId){
	return $filepath . 'projects/project_' . $projectId . '/data.txt';
}



function create_project($filepath, $username, $projectname){
	$user = read_user($filepath, $username);
	if($user){
		$index = read_file($filepath . 'projects/ProjectCounter.txt');
		if($index == '')
			$index = 0;
		$data = '{"name":"'.$projectname.'","owner":"'.$username.'","description":"","members":["'.$username.'"],"tasks":[],"risks":[]}';
		write_file(project_file($filepath, $index), $data);
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
	return update_feild_if_exists(project_file($filepath, $projectId), $feild, $value, 'ERROR{"Error":"Project does not exist"}');
}

function add_user_to_project($filepath, $projectId, $username){
	$data = read_file(project_file($filepath, $projectId));
	if( $data != ''){
		if(read_file(user_file($filepath, $username)) != ''){
			$data = add_to_json_aray($data, "members", '"'.$username.'"');
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
			$data = remove_from_json_array($data, "member", '"'.$username.'"');
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
			$data = remove_from_json_array($data, "projects", '"'.$projectId.'"');
			write_file(user_file($filepath, $username), $data);
			return $data;
		}else{
			return 'ERROR{"Error":"Project does not exist"}';
		}
	}else{
		return 'ERROR{"Error":"User does not exist"}';
	}
}


require 'TaskFuncs.php';
require 'RiskFuncs.php';

?>
