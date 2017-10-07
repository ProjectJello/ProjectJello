<?php

require 'FileIO.php';

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
