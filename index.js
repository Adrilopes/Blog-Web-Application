import express from "express";

const app = express();
const port = 3000;
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("pages/index.ejs");
});

app.get("/about", (req, res) => {
  res.render("pages/about.ejs");
});


app.get("/contact", (req, res) => {
  res.render("pages/contact.ejs");
});

app.get("/lamination", (req, res) => {
  res.render("pages/lamination.ejs");
});

app.get("/eyelash", (req, res) => {
  res.render("pages/eyelash.ejs");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});