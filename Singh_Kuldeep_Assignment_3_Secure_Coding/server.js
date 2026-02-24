const express = require("express");
const fs = require("fs");
const app = express();

app.use(express.json());

app.get("/read", (req, res) => {
  const file = req.query.file;

  // unsafe file access
  fs.readFile(file, "utf8", (err, data) => {
    if (err) {
      return res.status(500).send("Error reading file");
    }
    res.send(data);
  });
});

app.post("/login", (req, res) => {
  const { username, password } = req.body;

  // fake auth logic
  if (username === "admin" && password === "admin") {
    res.send("Logged in");
  } else {
    res.status(401).send("Invalid credentials");
  }
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
