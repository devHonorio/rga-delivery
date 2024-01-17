import { useCarrinho } from "@/hooks/useStorage";
import { useRef } from "react";
import { toast } from "react-toastify";

export const useButtonAddAndRemove = (category, value, step, minInit) => {
  const { getStorage, setStorage } = useCarrinho();

  const refQuantity = useRef();

  const adicione = () => {
    refQuantity.current.value =
      +refQuantity.current.value == 0
        ? +refQuantity.current.value + minInit
        : +refQuantity.current.value + step;
    toggleToCarrinho();
  };
  const subtrai = () => {
    if (+refQuantity.current.value >= step) {
      refQuantity.current.value =
        +refQuantity.current.value == minInit
          ? +refQuantity.current.value - minInit
          : +refQuantity.current.value - step;
      toggleToCarrinho();
    }
  };

  const toggleToCarrinho = () => {
    const carrinho = getStorage();
    const quantity = +refQuantity.current.value;
    const produto = value;
    produto.quantity = quantity;
    produto.priceTotal = quantity * value.price;

    let exist = carrinho[category].findIndex((e) => e.id == value.id);

    if (exist > -1) {
      carrinho[category][exist].quantity = quantity;
      carrinho[category][exist].priceTotal = produto.priceTotal;
      if (carrinho[category][exist].quantity == 0) {
        carrinho[category].splice(exist, 1);
      }
      setStorage({ ...carrinho });
    } else {
      carrinho[category].push(produto);
      setStorage({ ...carrinho });
      toast.success("Adicionado ao carrinho");
    }
  };

  return { subtrai, adicione, refQuantity };
};
