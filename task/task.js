/**
 * TODO 1:
 * - Buat array yang berisi buah-buahan.
 * - Refactor variable ke keyword baru.
 */
var fruits;

/**
 * TODO 2:
 * - Buat method index: Menampilkan data fruits.
 * - Ubah function ke Arrow Function.
 * - Gunakan looping for.
 */
function index() {}

/**
 * TODO 3:
 * - Buat method store: Menambahkan data baru ke array fruits.
 * - Refactor function ke Arrow Function.
 * - Gunakan method push.
 * @param {string} name - Nama buah.
 */
function store(name) {}

/**
 * TODO 4:
 * - Buat method update: Memperbarui data fruits berdasarkan index.
 * - Refactor function ke Arrow Function
 * @param {number} index - Index yang ingin diupdate.
 * @param {string} name - Nama buah yang baru.
 */
function update(index, name) {}

/**
 * TODO 5:
 * - Buat method destroy: Menghapus data fruits.
 * - Refactor function ke Arrow Function
 * - Gunakan method splice
 * @param {number} position - Index yang ingin dihapus
 */
function destroy(index) {}

/**
 * NOTES:
 * - Fungsi main tidak perlu diubah
 */
const main = () => {
  console.log("Method index - Menampilkan Buah");
  index();
  console.log("\nMethod store - Menambahkan buah Pisang");
  store("Pisang");
  console.log("\nMethod update - Update data 0 menjadi Kelapa");
  update(0, "Kelapa");
  console.log("\nMethod destroy - Menghapus data 1");
  destroy(1);
};

main();
