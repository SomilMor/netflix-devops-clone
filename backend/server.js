const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.get("/api/movies", (req, res) => {
  res.json([
    {
      id: 1,
      title: "Attack on Titan",
    },
    {
      id: 2,
      title: "Breaking Bad",
    },
    {
      id: 3,
      title: "Cyberpunk Edgerunners",
    },
  ]);
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});