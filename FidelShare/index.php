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
    <form action="login.php" method="post">
        <label for="email">Email</label>
        <input type="email" placeholder="Email" id="email" name="email" required>
        
        <label for="password">Password</label>
        <input type="password" placeholder="Password" id="password" name="password" required>
        
        <button type="submit">Login</button>  
        
        <a href="register.php">Register</a>
        <a href="forgot_password.php">Forgot Password?</a>
    </form>
</body>
</html>