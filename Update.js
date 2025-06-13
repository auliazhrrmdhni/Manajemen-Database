use("donationDB");

db.donations.updateOne(
    { name: "Andi" },
    { $set: { amount: 700000 } }
);