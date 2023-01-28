<?php

$myemail = 'you@yoursite.com';

$name    = $_POST['name'];
$email   = $_POST['email'];
$subject = $_POST['subject'];
$message = $_POST['message'];

$to            = $myemail;
$email_subject = "$subject";
$email_body    = "\n Name: $name \n Email: $email \n Subject: $subject \n Message: \n $message";
$headers       = "From: $email";
 
mail($to, $email_subject, $email_body, $headers);

?>