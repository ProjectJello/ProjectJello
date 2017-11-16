<?php

require 'FileIO.php';
require 'JSONFuncs.php';
require 'UserFuncs.php';
require 'ProjectFuncs.php';


// Just sending a basic JSON response to confirm all works.
//header('Content-Type: application/json');
//echo json_encode(Array('message', 'Hello World'));
$filepath = getcwd()."/Data/";
$request = "not found";
if(array_key_exists('request',$_GET))
	$request = $_GET['request'];
//echo read_json_field('{"name":"Fruits","arr":["oranges","raspberry","apples","raspberry"]}', "name", 1);
//Mode READ, WRITE, DELETE
$mode = "not found";
//if(array_key_exists('mode',$_GET))
//	$mode = $_GET['mode'];


switch($request){
	case 'userlogin':
		create_user($filepath, $_GET['usern']);
		echo read_user($filepath, $_GET['usern']);
		break;
	case 'userread':
		echo read_user($filepath, $_GET['usern']);
		break;
	case 'userupdate':
		echo update_user($filepath, $_GET['usern'], $_GET['field'], $_GET['val']);
		break;
	case 'useraddproject':
		add_user_to_project($filepath, $_GET['projId'], $_GET['usern']);
		add_project_to_user($filepath, $_GET['projId'], $_GET['usern']);
		break;
	case 'userremoveproject':
		remove_user_from_project($filepath, $_GET['projId'], $_GET['usern']);
		remove_project_from_user($filepath, $_GET['projId'], $_GET['usern']);
		break;
	case 'userdelete': //TODO
		
		//Needs to remove user from projects
		//delete_file(user_file($filepath, $_GET['usern']))
		break;
		
	
	case 'projectnew':
		echo create_project($filepath, $_GET['usern'], $_GET['projn']);
		break;
	case 'projectread':
		echo read_project($filepath, $_GET['projId']);
		break;
	case 'projectupdate':
		echo update_project($filepath, $_GET['projId'], $_GET['field'], $_GET['val']);
		break;
	case 'projectdelete': // TODO
		//needs to remove project from users
		//delete_file(project_file($filepath, $_GET['projId']))
		break;
	
	case 'tasknew':		
		$t_data = create_task($filepath, $_GET['projId'], $_GET['taskn'], $_GET['usern']);
		$user = read_json_field($t_data, "assignee", 1);
		echo update_json_field($t_data, "assignee", read_user($filepath, $user));
	break;
	
	case 'taskread':
		$t_data = read_task($filepath, $_GET['projId'], $_GET['taskId']);
		$user = read_json_field($t_data, "assignee", 1);
		echo update_json_field($t_data, "assignee", read_user($filepath, $user));
	break;
	
	case 'taskupdate':
		echo update_task($filepath, $_GET['projId'], $_GET['taskId'], $_GET['field'], $_GET['val']);
	break;
	
	case 'taskdelete': // TODO
		//needs to remove project from users
		//delete_file(project_file($filepath, $_GET['projId']))
		break;
	
	case 'risknew':
		echo create_risk($filepath, $_GET['projId'], $_GET['riskn'], $_GET['sev']);
	break;
	
	case 'riskread':
		echo read_risk($filepath, $_GET['projId'], $_GET['riskId']);
	break;
	
	case 'riskupdate':
		echo update_risk($filepath, $_GET['projId'], $_GET['riskId'], $_GET['field'], $_GET['val']);
	break;
	
	case 'riskdelete': // TODO
		//needs to remove project from users
		//delete_file(project_file($filepath, $_GET['projId']))
		break;
		
	default:
	echo 'ERROR{"Error":"request not found"}';
	
}
return;

?>
