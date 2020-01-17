<?php
header("Access-Control-Allow-Origin: *");

$_subject = $_GET['subject'];
if(!$_subject){
    echo 'No subject!';
    die();
}
$_email = $_GET['email'];
if(!$_email){
    echo 'No email!';
    die();
}
$_message = $_GET['message'];
if(!$_message){
    echo 'No message!';
    die();
}

$headers = "From: ".$_email."\r\n";
$headers .= 'MIME-Version: 1.0' . "\r\n";
$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
$email = "snoohd@gmail.com";
$subject = "Portfolio contact form: " .$_subject;
$message = "Email: ".$_email."<br/>";
$message .= "<br/>";
$message .= "Message:<br/>";
$message .= $_message;
mail("$email","$subject","$message","$headers");
echo "sent";
?>