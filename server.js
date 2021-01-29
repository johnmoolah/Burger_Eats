const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.static("./public"));
app.use(express.urlencoded( {extended: true }));
app.use(express.json());

// const exhbs = require("express-handlebars");
// app.engine("handlbars", exhbs({ defaultLayout: "main" }));
// app.set("view engine", "handlebars");

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));