import Bolo from "./entities/Bolo";
import Pedido from "./entities/Pedido";
import Product from "./entities/Products";

// const briga = {
// 	id: 'brigadeiro',
// 	name: 'brigadeiro',
// 	min: 0.6,
// 	max: 5.5,
// 	bento: true,
// 	price: 30,
// }

const beijo = {
  id: "beijinho",
  name: "beijinho",
  min: 0.6,
  max: 5.5,
  bento: true,
  price: 30,
};

// const ninho = {
// 	id: 'ninho',
// 	name: 'ninho',
// 	min: 0.6,
// 	max: 5.5,
// 	bento: true,
// 	price: 30,
// }

const morango = {
  id: "morango",
  name: "morango",
  min: 1.8,
  max: 6,
  bento: false,
  price: 42,
};

const bolo2 = new Bolo();
bolo2.peso = 3;

bolo2.recheio = beijo;
bolo2.recheio = morango;

bolo2.formato = "retangular";

bolo2.cobertura = "chantilly";

bolo2.decoracao = "normal";

const bolo = new Bolo();
bolo.peso = 3;

bolo.recheio = beijo;
bolo.recheio = beijo;

bolo.formato = "retangular";

bolo.cobertura = "chantilly";

bolo.decoracao = "normal";

const brigadeiro = new Product(
  "brigadeiro",
  "brigadeiro",
  0.6,
  "",
  "doces-tradicionais",
);

brigadeiro.addQuantity();

const pedido = new Pedido();

pedido.cliente = { name: "José", tel: "44 99862094" };
pedido.bolos = bolo;
pedido.bolos = bolo2;
pedido.doces = brigadeiro;
pedido.doces = brigadeiro;
pedido.doces = brigadeiro;
pedido.doces = brigadeiro;
pedido.doces = brigadeiro;
pedido.doces = brigadeiro;

console.log(pedido.get());
console.log(pedido.templatePedido);
