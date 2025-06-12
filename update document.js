const database = 'UAS';
const collection = 'WATI';

use(database);

db.createCollection(collection);
db[collection].updateOne(
  { nim: "2210003" },
  { $set: { nama: "Dedi Wibowo" } }
);