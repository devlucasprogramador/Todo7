//class Model com a lógica. Se tiver alguma validação de dados que caiba aqui, pode colocar tambem. Na model é onde modelamos os dados.

class Calculadora {
  static async soma(numero1, numero2) {
    return numero1 + numero2;
  }
}

module.exports = Calculadora;
