<?php
include "config/koneksi.php";

$query = mysqli_query($conn,"SELECT * FROM produk");
?>

<!DOCTYPE html>
<html>
<head>
    <title>Toko Kue Manis</title>

    <style>
    body{
        background:red !important;
    }
    </style>

</head>
<body>

<header>
    <h1>Toko Kue Manis</h1>
    <p>Aneka Kue Fresh dan Lezat</p>
</header>

<div class="container">

    <h2>Daftar Produk</h2>

    <div class="produk">

    <?php while($row = mysqli_fetch_assoc($query)){ ?>

        <div class="card item">

            <img src="images/<?php echo $row['gambar']; ?>">

            <h3><?php echo $row['nama_kue']; ?></h3>

            <p>
                Rp <?php echo number_format($row['harga'],0,",","."); ?>
            </p>

            <a href="detail.php?id=<?php echo $row['id']; ?>" class="btn">
                Detail
            </a>

        </div>

    <?php } ?>

    </div>

</div>

<footer>
    © 2025 Toko Kue Manis
</footer>

</body>
</html>