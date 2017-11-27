<?php

require 'FileIO.php';
require 'JSONFuncs.php';
require 'UserFuncs.php';
require 'ProjectFuncs.php';


// Just sending a basic JSON response to confirm all works.
//header('Content-Type: application/json');

$filepath = getcwd()."/Data/";

//Should be the public directory of ProjectJello
//Needs to be make accessable by Apache in permissions
$filepathpfp = substr(getcwd(), 0, strpos(getcwd(), "ProjectJello/") + strlen("ProjectJello/"))."client/public/pfps/";
$request = "not found";
if(array_key_exists('request',$_GET))
	$request = $_GET['request'];
else if(array_key_exists('request',$_POST))
	$request = $_POST['request'];
//echo count(read_from_json_array('{"name":"Fruits","arr":[]}', "arr"));

//if(array_key_exists('mode',$_GET))
//	$mode = $_GET['mode'];
//echo '';

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
	case 'userdelete':
		delete_user($filepath, $_GET['usern']);
		break;
		
	
	case 'projectnew':
		echo create_project($filepath, $_GET['usern'], $_GET['projn']);
		break;
	case 'projectread':
		$t_data = read_project($filepath, $_GET['projId']);
		$users = read_from_json_array($t_data, "members", 1);
		
		$user = read_json_field($t_data, "owner", 1);
		$t_data = update_json_field($t_data, "owner", read_user($filepath, $user));
		//ERROR IF USER IS IN PROJECT TWICE
		foreach($users as $user) {
			$t_data = replace_in_json_array($t_data, "members", '"'.$user.'"', read_user($filepath, $user));
		}
		echo $t_data;
		break;
	case 'projectupdate':
		echo update_project($filepath, $_GET['projId'], $_GET['field'], $_GET['val']);
		
		break;
	case 'projectdelete':
		delete_project($filepath, $_GET['projId']);
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
	
	case 'taskdelete':
		delete_task($filepath, $_GET['projId'], $_GET['taskId']);
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
	
	case 'riskdelete':
		delete_risk($filepath, $_GET['projId'], $_GET['riskId']);
		break;
	case 'setpfp':
		set_pfp($filepath, $filepathpfp, $_POST['usern'], $_FILES["pfp"]);
		break;
		
	default:
	echo 'ERROR{"Error":"request not found"}';
	
}
return;

?>
