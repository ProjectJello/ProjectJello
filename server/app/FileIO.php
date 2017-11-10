<?php

function make_file($filepath, $args, $perms = 0777, $generate = true){
	$tempPath = "";
	while(strpos($filepath, '/') !== false){
		$slash = strpos($filepath, '/');
		$tempPath = $tempPath . substr($filepath, 0, $slash + 1);
		$filepath = substr($filepath, $slash + 1);
		if(!file_exists($tempPath)){
			if(!$generate)
				return null;
			else $args = "a+";
			mkdir($tempPath);
			chmod($tempPath, $perms);
		}
	}
	if(!file_exists($tempPath . $filepath))
		if(!$generate)
			return null;
		else $args = "a+";
	$file = fopen($tempPath . $filepath, $args);
	chmod($tempPath . $filepath, $perms);
	return $file;
}

function write_file($filepath, $string){
		$file = make_file($filepath, "w");
		fwrite($file, $string);
		fclose($file);
}

function read_file($filepath, $generate = false){
		$file = make_file($filepath, "r", 0777, $generate);
		if(!$file)
			return "";
		$data = fread($file, filesize($filepath));
		fclose($file);
		return $data;
}

function delete_file($filepath){
	if(file_exists($filepath))
		if(is_dir($filepath))
			delete_folder($filepath);
		else
			unlink($filepath);
}

function delete_folder($filepath){
	$files = array_diff(scandir($filepath), array('.','..'));
	foreach ($files as $file) {
      delete_file($filepath .'/'. $file);
    } 
	rmdir($filepath);
}

?>
