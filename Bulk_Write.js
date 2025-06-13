use("donationDB");

db.donations.bulkWrite([
    {
        insertOne: {
            document: { name: "Budi", amount: 1000000, city: "Bandung" }
        }
    },
    {
        updateOne: {
            filter: { name: "Susi" },
            update: { $set: { amount: 2500000 } }
        }
    },
    {
        deleteOne: {
            filter: { name: "Rudi" }
        }
    }
]);