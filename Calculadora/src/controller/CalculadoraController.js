//na class controller criamos métodos que vão controlar a lógica das nossas requisições e respostas, validação de possíveis erros de requisição tambem.


const Calculadora = require("../model/Calculadora");

class CalculadoraController {
  static async soma(req, res) {
    try {
      const query = req.query;
      console.log("query: ", query);
      const values = Object.values(query);
      console.log("values: ", values);
      const converteNumero = values.map((numero) => {
        return Number(numero);
      });
      console.log("conversao: ", converteNumero);
      const soma = await Calculadora.soma(...converteNumero);
      res.status(200).json({
        resultado: soma,
        erro: false,
      });
    } catch (erro) {
      if (erro) {
        res.status(400).json({ mensamgem: "", erro: true });
      }
    }
  }
}

module.exports = CalculadoraController;
