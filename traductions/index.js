const express = require("express");
const expressHandlebars = require("express-handlebars");

const app = express();
const port = 8000;

app.use(express.static("public"));

app.engine("handlebars", expressHandlebars());
app.set("view engine", "handlebars");

app.listen(port, () => {
  console.log("Serveur lancé");
});

 const translations = {
  fr: {
    message: "Bonjour, Ca va ? ",
    flag: "/img/fra.svg",
  },
  en: {
    message: "Hello, How are you ?",
    flag: "/img/gbr.svg",
  },
  es: {
    message: "Hola, como esta ?",
    flag: "/img/esp.svg",
  },
  ge: {
    message: "Guten tag, wie bist du ?",
    flag: "/img/deu.svg",
  },
};

app.get("/:lang?", (req, res) => {
  res.render("home", {
    lang: translations[req.params.lang ? req.params.lang : "fr"],
    languages: Object.keys(translations),
  });
  /*
  if (req.params.lang) {
    res.render("home", {lang: translations[req.params.lang]})
  } else {
    res.render("home", {lang: translations["fr"]});
  }*/
});
