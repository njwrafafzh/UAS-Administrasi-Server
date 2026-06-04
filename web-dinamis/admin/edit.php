<?php
include "../config/koneksi.php";

$id = $_GET['id'];

$data = mysqli_query($conn, "SELECT * FROM produk WHERE id='$id'");
$row = mysqli_fetch_assoc($data);

if(isset($_POST['update'])){

    $nama = $_POST['nama'];
    $harga = $_POST['harga'];
    $deskripsi = $_POST['deskripsi'];
    $gambar = $_POST['gambar'];

    mysqli_query($conn,"
        UPDATE produk
        SET
        nama_kue='$nama',
        harga='$harga',
        deskripsi='$deskripsi',
        gambar='$gambar'
        WHERE id='$id'
    ");

    header("Location: dashboard.php");
}
?>

<!DOCTYPE html>
<html>
<head>
    <title>Edit Produk</title>
</head>
<body>

<h2>Edit Produk</h2>

<form method="POST">

    Nama Kue <br>
    <input type="text" name="nama"
        value="<?= $row['nama_kue']; ?>" required>
    <br><br>

    Harga <br>
    <input type="number" name="harga"
        value="<?= $row['harga']; ?>" required>
    <br><br>

    Deskripsi <br>
    <textarea name="deskripsi" required><?= $row['deskripsi']; ?></textarea>
    <br><br>

    Nama File Gambar <br>
    <input type="text" name="gambar"
        value="<?= $row['gambar']; ?>" required>
    <br><br>

    <button type="submit" name="update">
        Update Data
    </button>

</form>

</body>
</html>

<?php
include "../auth/cek_login.php";
?>