<?php

function leastPos($a, $b){
	if($b === false)
		return $a;
	if($a === false)
		return $b;
	
	if($a < $b)
		return $a;
	return $b;
}

function update_json_field($json, $feild, $val){
		$followfeild = strpos($json, '"'.$feild.'":') + strlen('"'.$feild.'":');
		$fp = substr($json, 0, $followfeild);
		$lp = substr($json, $followfeild);
		if($lp[0] === '['){
			echo "ERROR";
			return $json;
		}
		
		$projEnd = leastPos(strpos($lp, ','), strpos($lp, '}'));
		$lp = substr($lp, $projEnd);
		return $fp . $val . $lp;
}

function read_json_field($json, $feild, $trim = 0){
		$followfeild = strpos($json, '"'.$feild.'":') + strlen('"'.$feild.'":');
		$fp = substr($json, 0, $followfeild);
		$lp = substr($json, $followfeild);
		if($lp[0] === '['){
			echo "ERROR";
			return $json;
		}
		
		$projEnd = leastPos(strpos($lp, ','), strpos($lp, '}'));
		
		//$lp = substr($lp, $projEnd);
		return substr($lp, 0 + $trim, $projEnd - $trim * 2);
}

function add_to_json_aray($json, $feild, $val){
		$projects = strpos($json, '"'.$feild.'":[') + strlen('"'.$feild.'":[');
		$fp = substr($json, 0, $projects);
		$lp = substr($json, $projects);
		$projEnd = strpos($lp, ']');
		$projp = substr($lp, 0, $projEnd + 1);
		$fp = $fp . $val;
		if(strlen($projp) > 1)
			$fp =  $fp . ',';
		return $fp . $lp;
		
}

function remove_from_json_array($json, $feild, $val){
		$projects = strpos($json, '"'.$feild.'":[') + strlen('"'.$feild.'":[');
		$fp = substr($json, 0, $projects);
		$lp = substr($json, $projects);
		$projEnd = strpos($lp, ']');
		$projp = substr($lp, 0, $projEnd + 1);
		$lp = substr($lp, $projEnd + 1);
		$projp = str_replace($val . ',', '', $projp);
		$projp = str_replace(', '.$val, '', $projp);
		$projp = str_replace($val, '', $projp);
		
		return $fp . $projp .  $lp;
		
}


function read_from_json_array($json, $feild, $shrink = 0){
		$projects = strpos($json, '"'.$feild.'":[') + strlen('"'.$feild.'":[');
		$fp = substr($json, 0, $projects);
		$lp = substr($json, $projects);
		$projEnd = strpos($lp, ']');
		$projp = substr($lp, 0, $projEnd + 1);
		$lp = substr($lp, $projEnd + 1);
		$l = 0;
		$arr = [];
		//echo strlen($projp);
		for($i = 0; $i < strlen($projp); $i++)
		{
			//echo $projp[$i];
			if($projp[$i] === ','){
				array_push($arr, substr($projp, $l + $shrink, $i - $shrink - $l - $shrink));
				//echo substr($projp, $l + $shrink, $i - $shrink).'<br>';
				$l = $i + 1;
			}
		}
			if(strlen($projp) > 2)
				array_push($arr, substr($projp, $l + $shrink, strlen($projp) - $shrink - ($l + $shrink) - 1));
		
		return $arr;
		
}


function update_feild_if_exists($filepath, $feild, $value, $errormsg){
	$data = read_file($filepath);
	if($data != ''){
		$data = update_json_field($data, $feild, $value);
		write_file($filepath, $data);
		return $data;
	}else{
		return $errormsg;
	}
}

?>
