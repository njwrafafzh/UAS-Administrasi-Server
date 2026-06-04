<?php
include "config/koneksi.php";

$id = $_GET['id'];

$data = mysqli_query($conn,
"SELECT * FROM produk WHERE id='$id'");

$row = mysqli_fetch_assoc($data);
?>

<!DOCTYPE html>
<html>
<head>
    <title>Detail Produk</title>
    <link rel="stylesheet" href="assets/style.css">
</head>
<body>

<div class="container">

<div class="card">

    <img src="images/<?php echo $row['gambar']; ?>"
         width="400">

    <h2><?php echo $row['nama_kue']; ?></h2>

    <h3>
    Rp <?php echo number_format($row['harga'],0,",","."); ?>
    </h3>

    <p><?php echo $row['deskripsi']; ?></p>

    <a href="index.php" class="btn">Kembali</a>

</div>

</div>

</body>
</html>