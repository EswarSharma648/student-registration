const express = require("express");
const sql = require("mssql");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// SQL Server Config
const config = {
  user: "eswar",
  password: "your_password",
   server: "localhost\\SQLEXPRESS",
  database: "ClubBookingDB",
  options: {
    encrypt: false,
    trustServerCertificate: true
  }
};

// Connect DB
sql.connect(config).then(() => {
  console.log("Connected to SQL Server");
});

// GET Clubs
app.get("/clubs", async (req, res) => {
  try {
    const result = await sql.query`SELECT * FROM Clubs`;
    res.json(result.recordset);
  } catch (err) {
    console.log(err);
  }
});

// POST Booking
app.post("/book", async (req, res) => {
  const { userId, clubId } = req.body;

  try {
    await sql.query`
      INSERT INTO Bookings (UserId, ClubId)
      VALUES (${userId}, ${clubId})
    `;
    res.json({ message: "Booking Successful" });
  } catch (err) {
    console.log(err);
  }
});

app.listen(5000, () => console.log("Server running on port 5000"));