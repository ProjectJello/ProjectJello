<?php

function make_file($filepath, $args, $perms = 0777){
	$tempPath = "";
	while(strpos($filepath, '/') !== false){
		$slash = strpos($filepath, '/');
		$tempPath = $tempPath . substr($filepath, 0, $slash + 1);
		$filepath = substr($filepath, $slash + 1);
		if(!file_exists($tempPath)){
			mkdir($tempPath);
			chmod($tempPath, $perms);
		}
	}
	$file = fopen($tempPath . $filepath, $args);
	chmod($tempPath . $filepath, $perms);
	return $file;
}

function write_file($filepath, $string){
		$file = make_file($filepath, "w");
		fwrite($file, $string);
		fclose($file);
}

function read_file($filepath){
		$file = make_file($filepath, "r");
		$data = fread($file, filesize($filepath));
		fclose($file);
		return $data;
}

// Just sending a basic JSON response to confirm all works.
header('Content-Type: application/json');
//echo json_encode(Array('message', 'Hello World'));
$filepath = "/var/www/ProjectJello/Data/test.txt";
$squirrel = '{"name":"Squirrel"}';
if(!file_exists($filepath))
	write_file($filepath, $squirrel);
$read_data = read_file($filepath, $squirrel);

echo $read_data;
return;

?>
