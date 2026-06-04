<?php
include "../config/koneksi.php";

if(isset($_POST['simpan'])){

    $nama = $_POST['nama'];
    $harga = $_POST['harga'];
    $deskripsi = $_POST['deskripsi'];
    $gambar = $_POST['gambar'];

    mysqli_query($conn,"
    INSERT INTO produk
    (nama_kue,harga,deskripsi,gambar)
    VALUES
    ('$nama','$harga','$deskripsi','$gambar')
    ");

    header("Location: dashboard.php");
}
?>

<form method="POST">

    Nama Kue <br>
    <input type="text" name="nama"><br><br>

    Harga <br>
    <input type="number" name="harga"><br><br>

    Deskripsi <br>
    <textarea name="deskripsi"></textarea><br><br>

    Nama File Gambar <br>
    <input type="text" name="gambar"><br><br>

    <button name="simpan">Simpan</button>

</form>

<?php
include "../auth/cek_login.php";
?>