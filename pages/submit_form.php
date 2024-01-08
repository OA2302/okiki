<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];
    $jobType = $_POST["job-type"];

    $to = "okikiadenekan3@gmail.com";
    $subject = "New Form Submission";

    $headers = "From: $email";

    $body = "Name: $name\n";
    $body .= "Email: $email\n";
    $body .= "Message: $message\n";
    $body .= "Job Type: $jobType\n";

    echo "success";
} else {
    http_response_code(400);
    echo "Invalid request";
}
?>
