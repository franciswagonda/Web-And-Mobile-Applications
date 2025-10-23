
const pool = require("./db.js");
const express = require("express");
const app = express();
app.use(express.json());




//GET ALL USERS

app.get("/users", async (req, res) => {
 try {
 const usersQuery = "SELECT * FROM users";
 const [rows] = await pool.query(usersQuery);
 res.json(rows);
 } catch (err) {
 console.error("Error fectching users....", err);
 res.status(500).json({ erro: "Failed to Fetch Users" });
 }
});
const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on ${PORT}`));