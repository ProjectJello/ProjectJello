<?php

require 'FileIO.php';
require 'JSONFuncs.php';
require 'UserFuncs.php';
require 'ProjectFuncs.php';


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
//if(array_key_exists('mode',$_GET))
//	$mode = $_GET['mode'];

switch($request){
	case 'usernew':
		echo create_user($filepath, $_GET['usern']);
		break;
	case 'userread':
		echo read_user($filepath, $_GET['usern']);
		break;
	case 'userupdate':
		// TODO
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
		echo create_task($filepath, $_GET['projId'], $_GET['taskn'], $_GET['usern']);
	break;
	
	case 'risknew':
		echo create_risk($filepath, $_GET['projId'], $_GET['riskn']);
	break;
	
	default:
	echo 'ERROR{"Error":"request not found"}';
	
}
return;

?>
