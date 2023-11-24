export default class Endereco {
  #rua = "";
  #numero = "";
  #bairro = "";
  #complemento = "";
  #cidade = "";

  constructor(rua, numero, bairro, complemento, cidade) {
    this.#rua = rua;
    this.#numero = numero;
    this.#bairro = bairro;
    this.#complemento = complemento;
    this.#cidade = cidade;
  }

  setRua(rua) {
    this.#rua = rua;
  }

  setNumero(numero) {
    this.#numero = numero;
  }

  setBairro(bairro) {
    this.#bairro = bairro;
  }

  setComplemento(complemento) {
    this.#complemento = complemento;
  }

  setCidade(cidade) {
    this.#cidade = cidade;
  }

  get() {
    return {
      rua: this.#rua,
      numero: this.#numero,
      bairro: this.#bairro,
      complemento: this.#complemento,
      cidade: this.#cidade,
    };
  }
}
