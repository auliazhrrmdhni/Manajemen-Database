use("donationDB");

db.donations.aggregate([
    {
        $group: {
            _id: "$city",
            totalAmount: { $sum: "$amount" },
            count: { $sum: 1 }
        }
    }
]);