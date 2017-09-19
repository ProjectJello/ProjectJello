<?php

// Just sending a basic JSON response to confirm all works.
header('Content-Type: application/json');
echo json_encode(Array('message', 'Hello World'));
return;

?>
