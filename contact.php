<?php
 echo 'from contact php';
 die();
if(!isset( $_POST['first_name']) || !isset($_POST['last_name']) || !isset($_POST['phone_number']) || !isset($_POST['email']) || !isset($_POST['subject']) || !isset($_POST['message']) ) {
	echo 'something is wrong! Please try agian';
    die();
}


	$email_from = $_POST['email'];
	$email_subject = "Contact Form: ".$_POST['subject'];
	$email_message = "Please find below a message submitted by ".stripslashes($_POST['first_name'])." ".$_POST['last_name']."\n\n";
	$email_message .=" on ".date("d/m/Y")." at ".date("H:i")."\n\n";
	$email_message .= stripslashes($_POST['message']);

	

	$headers = 'From: '.$email_from."\r\n" .
   'Reply-To: '.$email_from."\r\n" ;

	mail('example@gmail.com', $email_subject, $email_message, $headers);
	echo "Thanks for contacting us.";
	die();
?>