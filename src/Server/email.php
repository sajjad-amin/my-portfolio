<?php
header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $data = file_get_contents('php://input');
    $data = json_decode($data);
    $from = "contact@sajjadamin.com";
    $to = "sayem.1998.bd@gmail.com";
    $subject = "Sajjad Amin's Portfolio";
    $headers = "From: ".$data->name." <".$data->email.">"."\r\n";
    $headers .= "MIME-Version: 1.0"."\r\n";
    $headers .= "Content-type:text/html;charset=UTF-8"."\r\n";
    if(mail($to, $subject, $data->message, $headers)){
        echo json_encode(["success" => true]);
    } else {
        echo json_encode(["success" => false]);
    }
}
?>