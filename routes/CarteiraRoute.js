const CarteiraController = require("../controller/CarteiraController");

class CarteiraRoute {
  constructor(app) {
    //Definições das outras rotas

    app
      .route("/carteira")
      .get(CarteiraRouter.buscarTodos)
      .post(CarteiraRouter.adicionar)
      .put(CarteiraRouter.editar)
         

      app.route("/carteira/ativarInativar").put(CarteiraRouter.ativarInativar);

      app.route("/carteira/esseaquiehsohprateste").delete(CarteiraRouter.deletarTudo);
      app.route("/carteira/buscar").get(CarteiraRouter.buscarTudo);
      app.route("/carteira/login").post(CarteiraRouter.login);
          
  }
}

module.exports = CarteiraRoute;
