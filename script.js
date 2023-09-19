function TarifParkir(jenisKendaraan, jamMasuk, jamKeluar) {
    //Harga tarif awal dan jam berikutnya
    const tarifMobil = 10000;
    const tarifMotor = 5000;
    const tarifJamberikutnya = 2000;

    //menghitung jam parkir
    const jamParkir = jamKeluar - jamMasuk;

    let biayaParkir = 0;
    if (jenisKendaraan === 'mobil'){
        if(jamParkir <= 2000) {
            biayaParkir = jamParkir * tarifMobil;
        } else {
            biayaParkir = (2000 * tarifMobil) + ((jamParkir - 2000) * tarifJamberikutnya);
        }
    } else if (jenisKendaraan === 'motor') {
        if(jamParkir <= 2000) {
            biayaParkir = jamParkir * tarifMotor;
        } else {
            biayaParkir = (2000 * tarifMotor) + ((jamParkir - 2000) * tarifJamberikutnya);
        }
    } else {
        return "jenis kendaraan valid";
    }
    return biayaParkir;
};

const jenisKendaraan = prompt('masukan jenis kendraan (mobil / motor ):');
const jamMasuk = parseFloat(prompt('masukan jam masuk (contoh : 8): '));
const jamkeluar = parseFloat(prompt('masukan jam keluar (contoh : 12): '));

const biayaParkir = TarifParkir (jenisKendaraan, jamMasuk, jamkeluar);
if (typeof biayaParkir === 'number'){
    console.log (`biaya parkir yang harus dibayar untuk parkir ${jenisKendaraan} adalah : ${biayaParkir}`);
} else {
    console.log(biayaParkir);
}