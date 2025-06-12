const database = 'UAS';
const collection = 'validasi';

use(database);

db.createCollection(collection);

db.createCollection("mahasiswa", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["nim", "nama", "jurusan", "angkatan"],
      properties: {
        nim: { bsonType: "string" },
        nama: { bsonType: "string" },
        jurusan: { bsonType: "string" },
        angkatan: { bsonType: "int" }
      }
    }
  }
});
