export default class Pedido {
  #cliente = {};
  #bolos = [];
  #doces = [];
  #salgados = [];
  #frios = [];
  #bebidas = [];
  #entrega = {};

  set cliente(cliente) {
    this.#cliente = cliente;
  }

  set bolos(bolo) {
    this.#bolos.push(bolo);
  }

  set doces(doce) {
    this.#doces.push(doce);
  }

  set salgados(salgado) {
    this.#salgados.push(salgado);
  }

  set frios(frio) {
    this.#frios.push(frio);
  }

  set bebidas(bebida) {
    this.#bebidas.push(bebida);
  }

  set entrega(endereco) {
    this.#entrega = endereco;
  }

  get cliente() {
    return this.#cliente;
  }

  get bolos() {
    return this.#bolos;
  }

  get doces() {
    return this.#doces;
  }

  get salgados() {
    return this.#salgados;
  }
  get frios() {
    return this.#frios;
  }

  get bebidas() {
    return this.#bebidas;
  }

  get entrega() {
    return this.#entrega;
  }

  get() {
    return {
      cliente: this.cliente,
      bolos: this.bolos,
    };
  }

  get templatePedido() {
    const bolos = this.bolos;
    const doces = this.doces;

    let strBolo = "BOLO:\n";
    let strDoce = "DOCE TRADICIONAl:\n";
    // let strSalgado = 'SALGADO:\n'
    // let strFrio = 'FRIO:\n'
    // let strBebida = 'BEBIDA:\n'

    bolos.forEach((bolo) => (strBolo += bolo.templateBolo));
    doces.forEach((doce) => (strDoce += doce.templateProduct));

    return `${bolos.length && strBolo}${doces.length && strDoce}`;
  }
}
