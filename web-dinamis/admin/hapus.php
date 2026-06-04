<?php
include "../config/koneksi.php";

$id = $_GET['id'];

mysqli_query($conn,
"DELETE FROM produk WHERE id='$id'");

header("Location: dashboard.php");
exit;
?>

<?php
include "../auth/cek_login.php";
?>