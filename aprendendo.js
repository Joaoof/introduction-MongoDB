const mongoose = require("mongoose")

// * Configurando o mongoose
mongoose.Promise = global.Promise;

mongoose.connect("mongodb://localhost/aprendendo", {
    // useMongoClient: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then(() => {
    console.log("Mongo conectado...")
  }).catch((err) => {
    console.log("Deu erro aqui ó: " + err)
  });

// Definindo o Model
const UsuarioSchema = mongoose.Schema({
  nome: {
    type: String,
    require: true
  },
  sobrenome: {
    type: String,
    require: true
  },
  email: {
    type: String,
    require: true
  },
  idade: {
    type: Number,
    require: true
  }
})

// ! Collection

mongoose.model('usuarios', UsuarioSchema) // É como se fosse o nome da tabela. Em seguida devo colocar o nome da variável que criei ('UsuarioSchema')

// Caso eu queira criar um novo usuário.

const jhon = mongoose.model('usuarios')

new jhon ({
  nome: "João of",
  sobrenome: "GOD",
  email: "email@.com",
  idade: 19
}).save().then(() => {
  console.log('Usuario criado com sucesso!')
}).catch(() => {
  console.log('Usuario não criado.')
}) // .save() -> vai salvar o usuario novo que criei.