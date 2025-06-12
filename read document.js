const database = 'UAS';
const collection = 'WATI';

use(database);

db.createCollection(collection);
db.mahasiswa.find();
db.mahasiswa.find().pretty();

