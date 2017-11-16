<?php

/*
	{
	"name" : "TASKNAME"
	"assignee" : "USERNAME"
	"description" : "DESCRIPTION"
	"hours" : FLOAT
	"status" : INT
	}



 */

function task_file($filepath, $projectId, $taskid){
	return $filepath . 'projects/project_' . $projectId . '/tasks/task_'.$taskid.'.txt';
}

function task_counter_file($filepath, $projectid){
	return $filepath . 'projects/project_' . $projectid . '/tasks/taskCount.txt';
}

function create_task($filepath, $projectId, $taskname, $username){

	$user = read_user($filepath, $username);
	if($user){
		$project = read_project($filepath, $projectId);
		if($project){
			$index = read_file(task_counter_file($filepath, $projectId));
			if($index == '')
				$index = 0;
			$data = '{"name":"'.$taskname.'","assignee":"'.$username.'","description":"", "hours":0, "status":0}';
			write_file(task_file($filepath, $projectId, $index), $data);
			$project = add_to_json_aray($project, 'tasks', $index);
			write_file(project_file($filepath, $projectId), $project);
			write_file(task_counter_file($filepath, $projectId), $index + 1);
			return $data;
		}else{
			echo 'ERROR{"Error":"Project does not exist"}';
		}
	}else{
		echo 'ERROR{"Error":"User does not exist"}';
	}
	
}


function read_task($filepath, $projectId, $taskId){
	$data = read_file(task_file($filepath, $projectId, $taskId), false);
	if( $data != ''){
		return $data;
	}else{
		//delete_file($filepath . 'projects/project_' . $projectId);
		echo 'ERROR{"Error":"Task does not exist"}';
	}
}
?>
