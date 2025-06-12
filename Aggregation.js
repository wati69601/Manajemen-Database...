const database = 'UAS';
const collection = 'WATI';

use(database);

db.createCollection(collection);
db[collection].aggregate([
  { $group: { _id: "$jurusan", jumlah_mahasiswa: { $sum: 1 } } }
]);
