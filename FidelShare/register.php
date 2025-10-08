<?php
session_start();
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>FidelShare</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <form action="" method="post">
        <label for="email">Email</label>
        <input type="email" placeholder="Email" id="email" name="email" required>
        
        <label for="password">Password</label>
        <input type="password" placeholder="Password" id="password" name="password" required><br>
        <label for="password">Confirm</label>
        <input type="password" placeholder="Password" id="password" name="password" required>
        <kucucs></kucucs>
        <button type="submit">Signin</button>  
        <a href="index.php">I have an account</a>
        
    </form>
</body>
<?php
//$conn=mysqli_connect('localhoot','root','','fidelshare');
?>
</html>