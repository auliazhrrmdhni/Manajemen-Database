use("donationDB");

db.donations.insertOne({
    name: "Andi",
    amount: 500000,
    city: "Jakarta",
    date: new Date()
});
db.donations.insertOne({
    name: "Budi",
    amount: 700000,
    city: "Bandung",
    date: new Date()
});

db.donations.insertOne({
    name: "Cindy",
    amount: 300000,
    city: "Surabaya",
    date: new Date()
});