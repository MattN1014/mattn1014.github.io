<?php 
	if(isset($_POST['sendMessageBtn'])){
    	if(isset($_POST['g-recaptcha-response']) && !empty($_POST['g-recaptcha-response'])){
    		$secret = 'YOUR SITE SECRET KEY HERE';

    		//Get the verify response 
            $verifyResponse = file_get_contents('https://www.google.com/recaptcha/api/siteverify?secret='.$secret.'&response='.$_POST['g-recaptcha-response']);
            $responseData = json_decode($verifyResponse);

            //get data from form
			$contact_name = strip_tags(trim($_POST['contact_name']));
			$contact_email = strip_tags(trim($_POST['contact_email']));
			$contact_website = strip_tags(trim($_POST['contact_website']));
			$contact_message = strip_tags(trim($_POST['contact_message']));

			if($responseData->success){
				$to = 'YOUR EMAIL ADDRESS HERE';
				$subject = 'New message from '.$contact_name.' on MWN Design';

				$htmlContent = '
					<html>
						<body style="background-color: #fff; color: #000; font-family: Arial, Helvetica, sans-serif; line-height: 1.4em;">

							<h1 style="margin: 10px 0; text-align: center;">
								Message from '.$contact_name.' on MWN Design
							</h1>
							<h3 style="margin: 10px 0; text-align: center;">
								Hi MWN Design you received a message
							</h3>
							<table style="text-align: left;">
								<tr>
									<th>Name: </th>
									<td><p>'.$contact_name.'</p></td>
								</tr>
								<tr>
									<th>Email Address: </th>
									<td><p>'.$contact_email.'</p></td>
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
							<p style="font-size: 10px; text-align: left;">
								This email and any files transmitted with it are confidential and intended solely for the use of the individual or entity to whom they are addressed. If you have received this email in error please notify matt@mwn-design.co.uk. This message contains confidential information and is intended only for the individual named. If you are not the named addressee you should not disseminate, distribute or copy this e-mail. Please notify the sender immediately by e-mail if you have received this e-mail by mistake and delete this e-mail from your system. If you are not the intended recipient you are notified that disclosing, copying, distributing or taking any action in reliance on the contents of this information is strictly prohibited.
							</p>
						</body>
					</html>
				';

				$headers = "MIME-Version: 1.0" . "\r\n";
                $headers .= "Content-type:text/html;chartset=UTF-8" . "\r\n";
                $headers .= 'From: '.$contact_name.' <'.$contact_email.'>' . "\r\n";

				mail($to,$subject,$htmlContent,$headers);

				$succMsg =  '
					Your message has been sent successfully.  I will be in touch soon.
				';
			}
			else {
				$errMsg = '
					<h2>Verification failed</h2> 
					<p>ReCaptcha verification failed.  This could be because your a robot or an error occurred.  Please try again or send me an email directly.</p>
				';
			}
    	}
    	else {
    		$errMsg = '
    			<h2>ReCaptcha box not clicked</h2>
    			<p>Please check the ReCaptcha box, this needs to be clicked to ensure your not a robot.</p>
    		';
    	}
	}