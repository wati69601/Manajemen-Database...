const database = 'UAS';
const collection = 'WATI';

use(database);

db.createCollection(collection);

db[collection].find({ angkatan: { $gt: 2021 } })

