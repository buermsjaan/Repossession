<?php

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">

    <!--Import Google Icon Font-->
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <!--Import materialize.css-->
    <link type="text/css" rel="stylesheet" href="assets/css/materialize.css"  media="screen,projection"/>

    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
</head>
<body>
<h1>Login</h1>
<input type=text class=qrcode-text>
<label class=qrcode-text-btn>
    <input type=file
           accept="image/*"
           capture=environment
           onchange="openQRCamera(this);"
           tabindex=-1>
</label>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.0/jquery.min.js"></script>
<script src="assets/js/js.cookie.js" type="text/javascript"></script>
<script src="assets/js/login.js"></script>
<script src="assets/js/qrcode.js"></script>
</body>
</html>