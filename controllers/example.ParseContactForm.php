<?php 
	require'config/Send_Mail.php';

	if(isset($_POST['sendMessageBtn'])){
		//get data from form
		$contact_name = $_POST['contact_name'];
		$contact_email = $_POST['contact_email'];
		$contact_website = $_POST['contact_website'];
		$contact_message = $_POST['contact_message'];

		//Send message 
		//Sender Info
		$mail->From = $contact_email;
		$mail->FromName = $contact_name;

		$email_body = '
			<html>
				<body style="background-color: #fff; color: #000; font-family: Arial, Helvetica, sans-serif; line-height: 1.4em;">

					<h1 style="margin: 10px 0; text-align: center;">
						Message from '.$contact_name.' on MWN Design
					</h1>
					<h3 style="margin: 10px 0; text-align: center;">
						Hi MWN Design you received a message
					</h3>
					<table>
						<tr>
							<th>Name: </tr>
							<td>'.$contact_name.'</td>
						</tr>
						<tr>
							<th>Email Address: </tr>
							<td>'.$contact_email.'</td>
						</tr>
						<tr>
							<th>Website: </th>
							<td>
								<a href="'.$contact_website.'">
									'.$contact_website.'
								</a>
							</td>
						</tr>
						<tr>
							<th>Message: </th>
							<td>
								'.$contact_message.'
							</td>
						</tr>
					</table>
					<p>
						This email and any files transmitted with it are confidential and intended solely for the use of the individual or entity to whom they are addressed. If you have received this email in error please notify matt@mwn-design.co.uk. This message contains confidential information and is intended only for the individual named. If you are not the named addressee you should not disseminate, distribute or copy this e-mail. Please notify the sender immediately by e-mail if you have received this e-mail by mistake and delete this e-mail from your system. If you are not the intended recipient you are notified that disclosing, copying, distributing or taking any action in reliance on the contents of this information is strictly prohibited.
					</p>
				</body>
			</html>
		';

		$mail->addAddress("YOUR EMAIL ADDRESS HERE");
		$mail->Subject = "Message from ".$contact_name." on MWN Design";
		$mail->Body = $email_body;

		if(!$mail->Send()){
			$result = '
				<script type="text/javascript">
					swal("Error", "Failed to send email: $mail->ErrorInfo, please try again", "error");
				</script>
			';
		}
		else {
			$result = '
				<script type="text/javascript">
					swal({
						title: "Message sent",
						text: "Your message has been sent successfully.  I will be in touch shortly.",
						type: "success",
						timer: 3000,
						showConfirmButton: false});
				</script>
			';
		}
	}