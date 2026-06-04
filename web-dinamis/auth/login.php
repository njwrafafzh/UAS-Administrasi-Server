<!DOCTYPE html>
<html>
<head>
    <title>Login Admin</title>

    <style>
    body{
        background:#eef6ff;
        font-family:Arial;
    }

    .login-box{
        width:350px;
        margin:100px auto;
        background:white;
        padding:25px;
        border-radius:15px;
        box-shadow:0 0 10px rgba(0,0,0,.1);
    }

    input{
        width:100%;
        padding:10px;
        margin:8px 0;
    }

    button{
        width:100%;
        padding:10px;
        background:#6ea8fe;
        color:white;
        border:none;
        border-radius:5px;
    }
    </style>

</head>
<body>

<div class="login-box">

<h2>Login Admin</h2>

<form action="proses_login.php" method="POST">

<input type="text"
name="username"
placeholder="Username"
required>

<input type="password"
name="password"
placeholder="Password"
required>

<button type="submit">
Login
</button>

</form>

</div>

</body>
</html>