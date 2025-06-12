const database = 'UAS';
const collection = 'WATI';

use(database);

db.createCollection(collection);

db[collection].insertMany([
  { nim: "2210001", nama: "Andi Saputra", jurusan: "Teknik Informatika", angkatan: 2022 },
  { nim: "2210002", nama: "Rina Marlina", jurusan: "Sistem Informasi", angkatan: 2021 },
  { nim: "2210003", nama: "Dedi Wijaya", jurusan: "Teknik Elektro", angkatan: 2023 },
  { nim: "2210004", nama: "Sari Lestari", jurusan: "Teknik Informatika", angkatan: 2022 },
  { nim: "2210005", nama: "Bagus Pratama", jurusan: "Manajemen Informatika", angkatan: 2020 }
])
