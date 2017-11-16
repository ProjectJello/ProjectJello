<?php

/*
	{
	"name" : "RISKNAME"
	"description" : "DESCRIPTION"
	"severity" : INT
	}

	Severities:
	* 0 - Done
	* 1 - Low
	* 2 - Medium
	* 3 - High

 */

function risk_file($filepath, $projectId, $riskid){
	return $filepath . 'projects/project_' . $projectId . '/risks/risk_'.$riskid.'.txt';
}

function risk_counter_file($filepath, $projectid){
	return $filepath . 'projects/project_' . $projectid . '/risks/riskCount.txt';
}

function create_risk($filepath, $projectId, $riskname, $severity){
	$project = read_project($filepath, $projectId);
	if($project){
		$index = read_file(risk_counter_file($filepath, $projectId));
		if($index == '')
			$index = 0;
		$data = '{"name":"'.$riskname.'","description":"", "severity":'.$severity.'}';
		write_file(risk_file($filepath, $projectId, $index), $data);
		$project = add_to_json_aray($project, 'risks', $index);
		write_file(project_file($filepath, $projectId), $project);
		write_file(risk_counter_file($filepath, $projectId), $index + 1);
		return $data;
	}else{
		echo 'ERROR{"Error":"Project does not exist"}';
	}
	
}

function read_risk($filepath, $projectId, $riskId){
	$data = read_file(risk_file($filepath, $projectId, $riskId), false);
	if( $data != ''){
		return $data;
	}else{
		//delete_file($filepath . 'projects/project_' . $projectId);
		echo 'ERROR{"Error":"Risk does not exist"}';
	}
}


function update_risk($filepath, $projectId, $riskId, $feild, $value){
	return update_feild_if_exists(risk_file($filepath, $projectId, $riskId), $feild, $value, 'ERROR{"Error":"Risk does not exist"}');
}
?>
