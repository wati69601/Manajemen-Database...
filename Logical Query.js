const database = 'UAS';
const collection = 'WATI';

use(database);

db.createCollection(collection);
db[collection].find({
  $or: [
    { jurusan: "Sistem Informasi" },
    { angkatan: 2023 }
  ]
});
