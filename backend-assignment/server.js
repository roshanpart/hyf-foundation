const path = require("path");

const express = require("express");

const app = express();
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.get("/user-count", (req, res) => {
  res.json({
    userCount: 25,
  });
});

app.get("/courses", (req, res) => {
  res.json({
    courses: ["HTML and CSS", "JavaScript", "Cloud Computing"],
  });
});

app.get("/teachers", (req, res) => {
  res.json({
    teachers: [
      { name: "John Doe", subject: "HTML and CSS" },
      { name: "Michael", subject: "JavaScript" },
      { name: "Roberto", subject: "Cloud Computing" },
    ],
  });
});
app.get("/about", (req, res) => {
  res.send("School of Coding leading to perfection");
});
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
