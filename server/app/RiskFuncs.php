<?php

/*
	{
	"name" : "RISKNAME"
	"description" : "DESCRIPTION"
	"severity" : INT
	}



 */

function risk_file($filepath, $projectId, $riskid){
	return $filepath . 'projects/project_' . $projectId . '/risks/risk_'.$riskid.'.txt';
}

function risk_counter_file($filepath, $projectid){
	return $filepath . 'projects/project_' . $projectid . '/risks/riskCount.txt';
}

function create_risk($filepath, $projectId, $riskname){
	$project = read_project($filepath, $projectId);
	if($project){
		$index = read_file(risk_counter_file($filepath, $projectId));
		if($index == '')
			$index = 0;
		$data = '{"name":"'.$riskname.'","description":"", "severity":0}';
		write_file(risk_file($filepath, $projectId, $index), $data);
		$project = add_to_json_aray($project, 'risks', $index);
		write_file(project_file($filepath, $projectId), $project);
		write_file(risk_counter_file($filepath, $projectId), $index + 1);
		return $data;
	}else{
		echo 'ERROR{"Error":"Project does not exist"}';
	}
	
}
?>
