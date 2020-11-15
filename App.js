"use strict";
const Express = require("express");
const Mongoose = require("mongoose");
const Cors = require("cors");

const env = process.NODE_ENV || "development";
const config = require("./config.json")[env];

//Importação dos modelos
const Carteira = require("./model/Carteira");

class App {
  constructor() {
    this.app;
  }

  //Configurar o servidor HTTP
  init() {
    //this.app é agora uma instancia do express
    this.app = Express();

    this.app.use(Express.json());
    this.app.use(Cors());

    //Conexão com o banco de dados MongoDB
    Mongoose.connect(
      `mongodb://${config.db.user}:${config.db.password}@${config.db.url}:${config.db.porta}/${config.db.nome}`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
      }
    );

    //Instanciando modelos
    new Carteira();

    //Importando as rotas
    const CarteiraRoute = require("./routes/CarteiraRoute");
    //Instanciando as rotas
    new CarteiraRoute(this.app);
    //Definição da rota raíz
    this.app.get("/", (req, res) => {
      res.send("Seja bem vindo!");
    });

    //Listener
    this.app.listen(process.env.PORT || config.port, () => {
      console.log(`API -Spartrybe rodando na porta ${config.port}`);
    });
  }
}

new App().init();
