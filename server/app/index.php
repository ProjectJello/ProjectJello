<?php

function make_file($filepath, $args){
	$tempPath = "";
	while(strpos($filepath, '/') !== false){
		$slash = strpos($filepath, '/');
		$tempPath = $tempPath . substr($filepath, 0, $slash + 1);
		$filepath = substr($filepath, $slash + 1);
		if(!file_exists($tempPath)){
			mkdir($tempPath);
		}
	}
	return fopen($tempPath . $filepath, $args);
}

// Just sending a basic JSON response to confirm all works.
header('Content-Type: application/json');
//echo json_encode(Array('message', 'Hello World'));
make_file("/var/www/ProjectJello/Data/test.txt", "w+");
//mkdir("/var/www/ProjectJello/Data");
//$file = fopen("/var/www/ProjectJello/Data/test.txt", "w+") or die("Unable to open file");
echo '{"name":"Squirrel"}';
return;

?>
