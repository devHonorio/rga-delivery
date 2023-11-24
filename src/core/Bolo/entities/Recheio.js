export default class Recheio {
  #id;
  #name;
  #ingredients;
  #price;
  #bento = true;
  #min = 1.5;
  #image = "";
  constructor(id, name, ingredients, price) {
    this.#id = id;
    this.#name = name;
    this.#ingredients = ingredients;
    this.#price = price;
  }

  set name(name) {
    this.#name = name;
  }

  set ingredients(descripition) {
    this.#ingredients = descripition;
  }

  set price(price) {
    this.#price = price;
  }

  set bento(bolean) {
    this.#bento = bolean;
  }

  set min(minPeso) {
    this.#min = minPeso;
  }

  set image(src) {
    this.#image = src;
  }
}
