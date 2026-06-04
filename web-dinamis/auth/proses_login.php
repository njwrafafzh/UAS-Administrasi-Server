<?php
session_start();
include "../config/koneksi.php";

$username = $_POST['username'];
$password = $_POST['password'];

$query = mysqli_query(
$conn,
"SELECT * FROM admin
WHERE username='$username'"
);

$data = mysqli_fetch_assoc($query);

if($data){

    if(password_verify(
        $password,
        $data['password']
    )){

        $_SESSION['login'] = true;
        $_SESSION['id_admin'] = $data['id'];
        $_SESSION['nama'] = $data['nama_lengkap'];

        header("Location: ../admin/dashboard.php");

    }else{

        echo "Password salah";
    }

}else{

    echo "Username tidak ditemukan";
}
?>