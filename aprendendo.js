const mongoose = require("mongoose")

// * Configurando o mongoose
mongoose.Promise = global.Promise;

mongoose.connect("mongodb://localhost/aprendendo", {
    useMongoClient: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then(() => {
    console.log("Mongo conectado...")
  }).catch((err) => {
    console.log("Deu erro aqui ó: " + err)
  });

  