

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">

    <!--Import Google Icon Font-->
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <!--Import materialize.css-->

    <link type="text/css" rel="stylesheet" href="assets/css/materialize.css"  media="screen,projection"/>
    <link type="text/css" rel="stylesheet" href="assets/css/style.css"
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>

    <title>Repossession Home</title>
</head>
<body>

<div class="container">
<h1> Repossession Home </h1>

<a href=login.php id="login" class="waves-effect waves-light btn">Click here to log in</a>
    <ul class="collapsible popout" data-collapsible="accordion">
        <li>
        <div class="collapsible-header">
            Terrorists
        </div>

                <div class="collapsible-body">
                    <span><ul class="TerroristCollection"></ul></span>

                </div>
        </li>

        <li>
            <div class="collapsible-header">
                Mines
            </div>

            <div class="collapsible-body">
                <span><ul class="MineCollection"></ul></span>

            </div>
        </li>

        <li>
            <div class="collapsible-header">
                Images
            </div>

            <div class="collapsible-body">
                <span><ul class="ImageCollection"></ul></span>

            </div>
        </li>
    </ul>
            </ul>
</div>

</body>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.0/jquery.min.js"></script>
<script type="text/javascript" src="assets/js/materialize.min.js"></script>
<script src="assets/js/js.cookie.js" type="text/javascript"></script>
<script src=assets/js/script.js></script>

</html>