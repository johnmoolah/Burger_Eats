const express = require("express");
const exhbs = require("express-handlebars");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.static("public"));
app.use(express.urlencoded( { extended: true }));
app.use(express.json());

app.engine("handlebars", exhbs({ defaultLayout: "main" }));
app.set("views", path.join(__dirname, "views"));

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));