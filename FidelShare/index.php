<?php
session_start();
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>FidelShare</title>
</head>
<body>
    <form action="" method="post">
        <label for="email">Email</label>
        <input type="email" placeholde="Email" id="email">
        <label for="password">Password</label>
        <input type="password" placeholde="Password" id="password">
        <button type="submit">Login</button>  
        <a href="register.php">Register</a>
        <a href="forgot_password.php">Forgot Password?</a>
        <br>
        <?php   
            if(isset($_SESSION['error'])){
                echo "<p style='color:red'>".$_SESSION['error']."</p>";
                unset($_SESSION['error']);
            }           
            if(isset($_SESSION['success'])){
                echo "<p style='color:green'>".$_SESSION['success']."</p>";
                unset($_SESSION['success']);
            }
        ?>
         
    </form>
   
    
</body>

</html>

