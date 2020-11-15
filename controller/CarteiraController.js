const Mongoose = require("mongoose");
const Carteira = Mongoose.model("Carteira");

class CarteiraController{

    static async buscarTodos(req, res) {
        console.log("[CARTEIRA CONTROLLER] :CHAMOU O MÉTODO BUSCAR TODOS");
        try {
        res.json(await Usuario.find({},{"password":0}));
        } catch (error) {
        console.log("[USUARIO CONTROLLER] : buscarTodos => " + error);
        res.status(500).send("Erro ao buscar Carteira!");
        }
    }

    //adicionar 
    //editar
    //ativarInativar
    //deletarTudo
}

module.exports = CarteiraController;