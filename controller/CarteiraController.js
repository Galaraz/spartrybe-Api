const Mongoose = require("mongoose");
const Carteira = Mongoose.model("Carteira");

class CarteiraController{

    static async buscarTodos(req, res) {
        console.log("[CARTEIRA CONTROLLER] :CHAMOU O MÉTODO BUSCAR TODOS");
        try {
        res.json(await Carteira.find({}));
        } catch (error) {
        console.log("[CARTEIRA CONTROLLER] : buscarTodos => " + error);
        res.status(500).send("Erro ao buscar Carteira!");
        }
    }
    //adicionar 
    static async adicionar(req, res) {
        try {
        const teste = req.body;
        console.log(
        "[CARTEIRA CONTROLLER] : CHAMOU O MÉTODO ADICIONAR" +
        "\n PARÂMETRO: " +
        JSON.stringify(teste)
        );
        res.status(201).json(await Carteira.create(teste));
        } catch (error) {
        res.status(500).send("Erro ao inserir novo teste: " + error);
        }
        } 

    //editar
    //ativarInativar
    //deletarTudo
}

module.exports = CarteiraController;