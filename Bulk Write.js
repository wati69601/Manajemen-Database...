const database = 'UAS';
const collection = 'WATI';

use(database);

db.createCollection(collection);
db[collection].bulkWrite([
  {
    insertOne: {
      document: { nim: "2210007", nama: "Lina Kamila", jurusan: "Teknik Sipil", angkatan: 2021 }
    }
  },
  {
    insertOne: {
      document: { nim: "2210008", nama: "Fahri Ramadhan", jurusan: "Teknik Informatika", angkatan: 2022 }
    }
  }
]);
