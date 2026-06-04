<?php
include "../auth/cek_login.php";
include "../config/koneksi.php";
?>

<h2>
Selamat Datang,
<?= $_SESSION['nama']; ?>
</h2>

<a href="../auth/logout.php">
Logout
</a>

<?php
include "../auth/cek_login.php";
?>