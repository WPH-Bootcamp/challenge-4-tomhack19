// /**
//  * Main Application - CLI Interface
//  * File ini adalah entry point aplikasi
//  *
//  * TODO: Implementasikan CLI interface yang interaktif dengan menu:
//  * 1. Tambah Siswa Baru
//  * 2. Lihat Semua Siswa
//  * 3. Cari Siswa (by ID)
//  * 4. Update Data Siswa
//  * 5. Hapus Siswa
//  * 6. Tambah Nilai Siswa
//  * 7. Lihat Top 3 Siswa
//  * 8. Keluar
//  */

// import readlineSync from 'readline-sync';
// import Student from './src/Student.js';
// import StudentManager from './src/StudentManager.js';

// // Inisialisasi StudentManager
// const manager = new StudentManager();

// /**
//  * Menampilkan menu utama
//  */
// function displayMenu() {
//   console.log('\n=================================');
//   console.log('SISTEM MANAJEMEN NILAI SISWA');
//   console.log('=================================');
//   console.log('1. Tambah Siswa Baru');
//   console.log('2. Lihat Semua Siswa');
//   console.log('3. Cari Siswa');
//   console.log('4. Update Data Siswa');
//   console.log('5. Hapus Siswa');
//   console.log('6. Tambah Nilai Siswa');
//   console.log('7. Lihat Top 3 Siswa');
//   console.log('8. Keluar');
//   console.log('=================================');
// }

// /**
//  * Handler untuk menambah siswa baru
//  * TODO: Implementasikan function ini
//  * - Minta input: ID, Nama, Kelas
//  * - Buat object Student baru
//  * - Tambahkan ke manager
//  * - Tampilkan pesan sukses/gagal
//  */
// function addNewStudent() {
//   // Implementasi di sini
//   console.log('\n--- Tambah Siswa Baru ---');
//   // TODO: Lengkapi implementasi
// }

// /**
//  * Handler untuk melihat semua siswa
//  * TODO: Implementasikan function ini
//  * - Panggil method displayAllStudents dari manager
//  * - Jika tidak ada siswa, tampilkan pesan
//  */
// function viewAllStudents() {
//   // Implementasi di sini
//   console.log('\n--- Daftar Semua Siswa ---');
//   // TODO: Lengkapi implementasi
// }

// /**
//  * Handler untuk mencari siswa berdasarkan ID
//  * TODO: Implementasikan function ini
//  * - Minta input ID
//  * - Cari siswa menggunakan manager
//  * - Tampilkan info siswa jika ditemukan
//  */
// function searchStudent() {
//   // Implementasi di sini
//   console.log('\n--- Cari Siswa ---');
//   // TODO: Lengkapi implementasi
// }

// /**
//  * Handler untuk update data siswa
//  * TODO: Implementasikan function ini
//  * - Minta input ID siswa
//  * - Tampilkan data saat ini
//  * - Minta input data baru (nama, kelas)
//  * - Update menggunakan manager
//  */
// function updateStudent() {
//   // Implementasi di sini
//   console.log('\n--- Update Data Siswa ---');
//   // TODO: Lengkapi implementasi
// }

// /**
//  * Handler untuk menghapus siswa
//  * TODO: Implementasikan function ini
//  * - Minta input ID siswa
//  * - Konfirmasi penghapusan
//  * - Hapus menggunakan manager
//  */
// function deleteStudent() {
//   // Implementasi di sini
//   console.log('\n--- Hapus Siswa ---');
//   // TODO: Lengkapi implementasi
// }

// /**
//  * Handler untuk menambah nilai siswa
//  * TODO: Implementasikan function ini
//  * - Minta input ID siswa
//  * - Tampilkan data siswa
//  * - Minta input mata pelajaran dan nilai
//  * - Tambahkan nilai menggunakan method addGrade
//  */
// function addGradeToStudent() {
//   // Implementasi di sini
//   console.log('\n--- Tambah Nilai Siswa ---');
//   // TODO: Lengkapi implementasi
// }

// /**
//  * Handler untuk melihat top students
//  * TODO: Implementasikan function ini
//  * - Panggil getTopStudents(3) dari manager
//  * - Tampilkan informasi siswa
//  */
// function viewTopStudents() {
//   // Implementasi di sini
//   console.log('\n--- Top 3 Siswa ---');
//   // TODO: Lengkapi implementasi
// }

// /**
//  * Main program loop
//  * TODO: Implementasikan main loop
//  * - Tampilkan menu
//  * - Baca input pilihan
//  * - Panggil handler yang sesuai
//  * - Ulangi sampai user pilih keluar
//  */
// function main() {
//   console.log('Selamat datang di Sistem Manajemen Nilai Siswa!');

//   // TODO: Implementasikan loop utama program
//   let running = true;

//   while (running) {
//     // Tampilkan menu
//     // Baca pilihan user
//     // Jalankan action sesuai pilihan
//     // TODO: Lengkapi implementasi

//     // Hint: gunakan switch-case untuk handle berbagai pilihan
//   }

//   console.log('\nTerima kasih telah menggunakan aplikasi ini!');
// }

// // Jalankan aplikasi
// main();
/**
 * Main Application - CLI Interface
 */

// import readlineSync from 'readline-sync';
// import Student from './src/Student.js';
// import StudentManager from './src/StudentManager.js';

// const manager = new StudentManager();

// function displayMenu() {
//   console.log('\n=================================');
//   console.log('   SISTEM MANAJEMEN NILAI SISWA');
//   console.log('=================================');
//   console.log('1. Tambah Siswa Baru');
//   console.log('2. Lihat Semua Siswa');
//   console.log('3. Cari Siswa');
//   console.log('4. Update Data Siswa');
//   console.log('5. Hapus Siswa');
//   console.log('6. Tambah Nilai Siswa');
//   console.log('7. Lihat Top 3 Siswa');
//   console.log('8. Keluar');
//   console.log('=================================');
// }

// function addNewStudent() {
//   console.log('\n--- Tambah Siswa Baru ---');
//   const id = readlineSync.question('ID Siswa   : ');
//   if (manager.findStudentById(id)) {
//     console.log('Gagal: ID sudah digunakan!');
//     return;
//   }
//   const nama = readlineSync.question('Nama       : ');
//   const kelas = readlineSync.question('Kelas      : ');
//   const student = new Student(id, nama, kelas);
//   manager.addStudent(student);
//   console.log('Siswa berhasil ditambahkan!\n');
// }

// function viewAllStudents() {
//   console.log('\n--- Daftar Semua Siswa ---');
//   manager.displayAllStudents();
//   if (manager.getAllStudents().length === 0)
//     console.log('Belum ada data siswa.\n');
// }

// function searchStudent() {
//   console.log('\n--- Cari Siswa ---');
//   const id = readlineSync.question('Masukkan ID: ');
//   const student = manager.findStudentById(id);
//   if (student) {
//     student.displayInfo();
//     student.displayGrades();
//   } else {
//     console.log('Siswa tidak ditemukan.\n');
//   }
// }

// function updateStudent() {
//   console.log('\n--- Update Data Siswa ---');
//   const id = readlineSync.question('ID Siswa: ');
//   const student = manager.findStudentById(id);
//   if (!student) {
//     console.log('Siswa tidak ditemukan.\n');
//     return;
//   }
//   student.displayInfo();
//   const nama =
//     readlineSync.question(`Nama baru (${student.nama}) : `) || student.nama;
//   const kelas =
//     readlineSync.question(`Kelas baru (${student.kelas}) : `) || student.kelas;
//   manager.updateStudent(id, nama, kelas);
//   console.log('Data berhasil diperbarui!\n');
// }

// function deleteStudent() {
//   console.log('\n--- Hapus Siswa ---');
//   const id = readlineSync.question('ID Siswa: ');
//   const student = manager.findStudentById(id);
//   if (!student) {
//     console.log('Siswa tidak ditemukan.\n');
//     return;
//   }
//   student.displayInfo();
//   if (readlineSync.keyInYNStrict('Yakin ingin menghapus?')) {
//     manager.deleteStudent(id);
//     console.log('Siswa berhasil dihapus.\n');
//   } else {
//     console.log('Dibatalkan.\n');
//   }
// }

// function addGradeToStudent() {
//   console.log('\n--- Tambah Nilai ---');
//   const id = readlineSync.question('ID Siswa: ');
//   const student = manager.findStudentById(id);
//   if (!student) {
//     console.log('Siswa tidak ditemukan.\n');
//     return;
//   }
//   student.displayInfo();
//   const mapel = readlineSync.question('Mata Pelajaran : ');
//   const nilai = Number(readlineSync.question('Nilai (0-100)  : '));
//   if (isNaN(nilai) || nilai < 0 || nilai > 100) {
//     console.log('Nilai tidak valid!\n');
//     return;
//   }
//   student.addGrade(mapel, nilai);
//   console.log('Nilai berhasil ditambahkan!\n');
// }

// function viewTopStudents() {
//   console.log('\n--- Top 3 Siswa (Rata-rata Tertinggi) ---');
//   const top = manager.getTopStudents(3);
//   if (top.length === 0) {
//     console.log('Belum ada data nilai.\n');
//     return;
//   }
//   top.forEach((s, i) => {
//     console.log(
//       `${i + 1}. ${s.nama} (${s.kelas}) — Rata-rata: ${s
//         .getAverageGrade()
//         .toFixed(2)}`
//     );
//     s.displayGrades();
//     console.log('---');
//   });
// }

// function main() {
//   console.clear();
//   console.log('Selamat datang di Sistem Manajemen Nilai Siswa!\n');

//   while (true) {
//     displayMenu();
//     const pilihan = readlineSync.question('Pilih menu (1-8): ');

//     switch (pilihan) {
//       case '1':
//         addNewStudent();
//         break;
//       case '2':
//         viewAllStudents();
//         break;
//       case '3':
//         searchStudent();
//         break;
//       case '4':
//         updateStudent();
//         break;
//       case '5':
//         deleteStudent();
//         break;
//       case '6':
//         addGradeToStudent();
//         break;
//       case '7':
//         viewTopStudents();
//         break;
//       case '8':
//         console.log('\nTerima kasih! Sampai jumpa.\n');
//         return;
//       default:
//         console.log('Pilihan tidak valid!\n');
//     }
//     readlineSync.keyInPause('\nTekan ENTER untuk kembali ke menu...');
//     console.clear();
//   }
// }

// main();
/**
 * Class Student
 * Representasi dari seorang siswa dengan data dan nilai-nilainya
 */

class Student {
  /**
   * Constructor
   * @param {string} id
   * @param {string} name
   * @param {string} studentClass
   */
  constructor(id, name, studentClass) {
    this.id = id;
    this.name = name;
    this.class = studentClass;
    this.grades = {}; // { subject: score }
  }

  /**
   * Menambah nilai siswa
   * @param {string} subject
   * @param {number} score
   */
  addGrade(subject, score) {
    if (score < 0 || score > 100) {
      console.log('❌ Nilai harus antara 0 - 100!');
      return;
    }
    this.grades[subject] = score;
  }

  /**
   * Menghitung rata-rata nilai
   * @returns {number}
   */
  getAverage() {
    const subjects = Object.keys(this.grades);

    if (subjects.length === 0) return 0;

    const total = subjects.reduce(
      (sum, subject) => sum + this.grades[subject],
      0
    );

    return total / subjects.length;
  }

  /**
   * Mengembalikan status Lulus atau Tidak Lulus
   * @returns {string}
   */
  getGradeStatus() {
    return this.getAverage() >= 75 ? 'Lulus' : 'Tidak Lulus';
  }

  /**
   * Menampilkan info lengkap siswa
   */
  displayInfo() {
    console.log('====================================');
    console.log(`ID     : ${this.id}`);
    console.log(`Nama   : ${this.name}`);
    console.log(`Kelas  : ${this.class}`);
    console.log('Nilai  :');

    if (Object.keys(this.grades).length === 0) {
      console.log('  Belum ada nilai.');
    } else {
      for (const subject in this.grades) {
        console.log(`  ${subject}: ${this.grades[subject]}`);
      }
    }

    const avg = this.getAverage();
    console.log(`Rata-rata : ${avg.toFixed(2)}`);
    console.log(`Status    : ${this.getGradeStatus()}`);
    console.log('====================================');
  }
}

export default Student;
