use("donationDB");

db.donations.find({
    $or: [
        { amount: { $gt: 2000000 } },
        { city: "Jakarta" }
    ]
});