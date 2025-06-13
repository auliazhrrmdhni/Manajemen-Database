use("donationDB");

db.createCollection("validated_donations", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["name", "amount", "city"],
            properties: {
                name: {
                    bsonType: "string",
                    description: "Nama donatur harus string"
                },
                amount: {
                    bsonType: "int",
                    minimum: 10000,
                    maximum: 5000000,
                    description: "Jumlah donasi antara 10.000 - 5.000.000"
                },
                city: {
                    bsonType: "string",
                    enum: ["Jakarta", "Bandung", "Surabaya", "Yogyakarta"],
                    description: "Kota harus salah satu dari daftar"
                }
            }
        }
    }
});