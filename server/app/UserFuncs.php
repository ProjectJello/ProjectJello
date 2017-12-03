<?php



/*
  {
  “name”		: “USERNAME”,
  “projects”	: [PROJECT IDs],
  “pfp” 		: ”PROFILE PICTURE URL”
  }
 */ 



function user_dir($filepath) {
	return $filepath . 'users';
}

function user_file($filepath, $username){
	return $filepath . 'users/' . $username . '.txt';
}

function create_user($filepath, $username){
	if(read_file(user_file($filepath, $username)) == ''){
		$data = '{"name":"'.$username.'","projects":[],"pfp":"/public/pfps/default.jpg"}';
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
		return 'ERROR{"Error":"User does not exist"}';
	}
}

function read_users($filepath) {
	$users = "[";
	$handle = opendir(user_dir($filepath));
	while (false !== ($entry = readdir($handle))) {
		if ($entry != '.' && $entry != '..') {
	    	$users .= read_file(user_file($filepath, explode(".", $entry)[0]), false) . ",";
		}
	}

	$users = substr($users, 0, -1);
	$users .= "]";

	return $users;
}

function update_user($filepath, $username, $feild, $value){
	return update_feild_if_exists(user_file($filepath, $username), $feild, $value, 'ERROR{"Error":"User does not exist"}');
}

function delete_user($filepath, $username){
	$u_data = read_file(user_file($filepath, $username), false);
	if( $u_data != ''){
		$projects = read_from_json_array($u_data, "projects");
		foreach($projects as $project){
			remove_user_from_project($filepath, $project, $username);
		}
		delete_file(user_file($filepath, $username));
		return true;
	}else{
		echo 'ERROR{"Error":"User does not exist"}';
		return false;
	}
}

function set_pfp($filepath, $filepathpfp, $username, $file){
		$extension = pathinfo(basename($file["name"]),PATHINFO_EXTENSION);
		$isgood = false;
		$error = "";
		switch(strtolower($extension)) {
			case "png":
			case "jpg":
			case "bmp":
				$isgood = true;
				break;
			default:
				$isgood = false;			
		}
		if(!$isgood)
			return 'ERROR{"Error":"File upload failed due to improper file type"}';
		
		if($isgood){
			$index = read_file($filepathpfp . 'pfpIndex.txt');
			if($index == '')
				$index = 0;
			write_file($filepathpfp . 'pfpIndex.txt', $index + 1);
			
			$targetFP = $filepathpfp . "pfp_".$index."." . $extension;
			//echo $targetFP . '<br>';
			if(read_user($filepath, $username)[0] != 'E'){
				if(move_uploaded_file($file["tmp_name"], $targetFP)){
					return update_user($filepath, $username, "pfp", '"'.substr($targetFP, strpos($targetFP, "/public/"),strlen($targetFP)).'"');
				}else{ $error = 'ERROR{"Error":"File upload failed for unknown reason"}';}
					
			}else{ $error = 'ERROR{"Error":"User does not exist"}';}
			if(strlen($error) > 1){
				write_file($filepathpfp . 'pfpIndex.txt', $index);
				return $error;
			}
		}
}
?>
