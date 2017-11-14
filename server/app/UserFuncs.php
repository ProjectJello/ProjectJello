<?php



/*
  {
  “name”		: “USERNAME”,
  “projects”	: [PROJECT IDs],
  “pfp” 		: ”PROFILE PICTURE URL”
  }
 */ 



function user_file($filepath, $username){
	return $filepath . 'users/' . $username . '.txt';
}

function create_user($filepath, $username){
	if(read_file(user_file($filepath, $username)) == ''){
		$data = '{"name":"'.$username.'","projects":[],"pfp":"default.jpg"}';
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
?>
