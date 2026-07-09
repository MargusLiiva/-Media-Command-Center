const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Media Command Center работает!");
});

app.post("/api/post", (req, res) => {
  console.log(req.body);
  res.send("Пост получен");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Server started");
});
