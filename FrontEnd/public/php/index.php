<?php

// Define some constants
define( "RECIPIENT_NAME", "3F" );
define( "RECIPIENT_EMAIL", "tedy.panama@gmail.com" );

// Read the form values
$success = false;
$name = isset( $_POST['Nombre'] ) ? preg_replace( "/[^\.\-\' a-zA-Z0-9]/", "", $_POST['Nombre'] ) : "";
$senderEmail = isset( $_POST['Email'] ) ? preg_replace( "/[^\.\-\_\@a-zA-Z0-9]/", "", $_POST['Email'] ) : "";
// $phone = isset( $_POST['phone'] ) ? preg_replace( "/[^\.\-\_\@a-zA-Z0-9]/", "", $_POST['phone'] ) : "";
// $services = isset( $_POST['services'] ) ? preg_replace( "/[^\.\-\_\@a-zA-Z0-9]/", "", $_POST['services'] ) : "";
$subject = isset( $_POST['Subject'] ) ? preg_replace( "/[^\.\-\_\@a-zA-Z0-9]/", "", $_POST['Subject'] ) : "";
// $website = isset( $_POST['website'] ) ? preg_replace( "/[^\.\-\_\@a-zA-Z0-9]/", "", $_POST['website'] ) : "";
$message = isset( $_POST['Message'] ) ? preg_replace( "/(From:|To:|BCC:|CC:|Subject:|Content-Type:)/", "", $_POST['Message'] ) : "";

$mail_subject = '3F Email: ' . $name;

$body = 'Nombre: '. $name . "\r\n";
$body .= 'Email: '. $senderEmail . "\r\n";


// if ($phone) {$body .= 'Phone: '. $phone . "\r\n"; }
// if ($services) {$body .= 'services: '. $services . "\r\n"; }
if ($subject) {$body .= 'Asunto: '. $subject . "\r\n"; }
// if ($website) {$body .= 'Website: '. $website . "\r\n"; }

$body .= 'message: ' . "\r\n" . $message;

echo $body;


// If all values exist, send the email
if ( $name && $senderEmail && $message ) {
  $recipient = RECIPIENT_NAME . " <" . RECIPIENT_EMAIL . ">";
  $headers = "From: " . $name . " <" . $senderEmail . ">";  
  $success = mail( $recipient, $mail_subject, $body, $headers );
  echo json_encode('enviado');
}else {
	echo json_encode('error');
}

?>