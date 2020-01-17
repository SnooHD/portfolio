<?php
$name = $_GET['name'];
if(!$name){
    echo 'No name!';
    die();
}
$email = $_GET['email'];
if(!$email){
    echo 'No email!';
    die();
}
$_message = $_GET['message'];
if(!$_message){
    echo 'No message!';
    die();
}
$form = $_GET['form'];
if(!$form){
    $form = 'contact';
}

$headers = "From: ".$email."\r\n";
$headers .= 'MIME-Version: 1.0' . "\r\n";
$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
$address = "academianativeway@gmail.com";
$subject = "Nativeway ".$form." form";
$message = "From: ".$name."<br/>";
$message .= "Email: ".$email."<br/>";
$message .= "<br/>";
$message .= "Message:<br/>";
$message .= $_message;
mail("$address","$subject","$message","$headers");
echo "sent";
?>