<?php
if (isset($_POST['send'])){
	$to = 'panderson900@gmail.com';
	$subject = $_POST['subject'] ;
	
	$message = '<html><body>';
	$message .= '<h1>Feedback from Peter Anderson CV:<h1>';
	$message .= '<h2>Name:</h2>' . $_POST['name'] . "<br>";
	$message .= '<h2>From:</h2>' . $_POST['email'] . "<br>";
	$message .= '<h2>Comments:</h2>' . $_POST['comments'];
	$message .= '</body></html>';
	
	$headers .= 'content-type: text/html; charset=utf-8';
	
	$email = filter_input(INPUT_POST, 'email', FILTER_VALIDATE_EMAIL);
	if($email){
		$headers .= "\r\nReply-To: $email";
	}
	
	$success = mail($to, $subject, $message, $headers);
}

?>

<head>
	<title>Peter Anderson</title>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.0/css/all.css" integrity="sha384-lZN37f5QGtY3VHgisS14W3ExzMWZxybE1SJSEsQp9S+oqd12jhcu+A56Ebc1zFSJ" crossorigin="anonymous">
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css">
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"></script>
</head>

<body style="background-color: #F8F9FA">
	
		<div id="welcome" style="text-align:center;">
		
			<?php if (isset($success) && $success) { ?>
			<h1>Thank You</h1>
			Your message has been sent.<br><br>I will get back to you as soon as possible.
			<?php } else { ?>
			<h1>Oops!</h1>
			Sorry, there was a problem sending your message.
			<?php } ?>
						
		</div>
		
</body>
	
	