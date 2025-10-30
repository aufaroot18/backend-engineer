/**
 * Fungsi untuk menampilkan hasil download
 * @param {string} result - Nama file yang didownload
 */
function showDownload(result) {
  console.log("Download selesai");
  console.log("Hasil Download: " + result);
}

/**
 * Fungsi untuk download file
 */
function download() {
  setTimeout(function () {
    const result = "windows-10.exe";
    return result;
  }, 3000);
}

/**
 * Fungsi main untuk menjalankan proses download dan menampilkan hasil.
 */
const main = () => {
  const result = download();
  showDownload(result);
};

/**
 * TODO:
 * - Handle proses Asynchronous ke Promise atau Async Await.
 * - Refactor function ke ES6 Arrow Function
 */
