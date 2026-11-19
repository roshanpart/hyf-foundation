const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Welcome to my backend learning journey!");
});

app.get("/about", (req, res) => {
  res.send("This is my first backend practice project.");
});

app.get("/contact", (req, res) => {
  res.send("You can contact us at contact@example.com");
});

app.get("/services", (req, res) => {
  res.send("We offer web development and backend services.");
});

app.get("/student", (req, res) => {
  res.json({
    name: "Roshan",
    age: 40,
    country: "Nepal",
    course: "Web Development",
    institution: "HACK YOUR FUTURE",
    beginner: true,
  });
});

app.get("/courses", (req, res) => {
  res.json({
    courses: [
      "HTML and CSS",
      "JavaScript",
      "Backend Development",
      "Cloud Computing",
    ],
  });
});

app.get("/teachers", (req, res) => {
  res.json({
    teachers: [
      {
        name: "Michael",
        subject: "JavaScript",
      },
      { name: "Louise", subject: "HTML and CSS" },
    ],
  });
});
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
