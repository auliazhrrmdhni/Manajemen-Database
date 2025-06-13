use("donationDB");

db.donations.find({
    amount: { $gt: 500000 } 
});