<?php 
	require 'class.phpmailer.php';

	$mail = new PHPMailer();;
	$mail->IsSMTP();
	$mail->SMTPDebug = false; //only set to true in testing
	//$mail->Mailer ='smtp';
	$mail->SMTPSecure = 'tls';
	//$mail->Port = 465;
	$mail->Host = 'YOUR MAIL SERVER HERE';
	$mail->IsHTML(true);

	//Auth info
	$mail->SMTPAuth = true;
	$mail->Username = 'YOUR EMAIL ADDRESS HERE';
	$mail->Password = "YOUR EMAIL ADDRESS PASSWORD HERE";

	

