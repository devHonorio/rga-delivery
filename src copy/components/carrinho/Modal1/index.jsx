import ItemCarrinho from "./ItemCarrinho";
import Footer from "../Layout/FooterCarrinho";

import { useEffect, useState } from "react";
import ItemBolo from "./ItemBolo";
import { SButton } from "@/components/@ui/Buton";
import { SContainer, SContainerContent } from "./styles";
import { useCarrinho } from "@/hooks/useStorage";

export default function Modal1({ className, setIsActive }) {
  const { getStorage } = useCarrinho();
  const [renderCarrinho, setRenderCarrinho] = useState(false);

  let carrinho = getStorage();
  useEffect(() => {
    carrinho = getStorage();
  }, [renderCarrinho]);

  function renderItens() {
    if (carrinho) {
      const bolos = carrinho.bolos?.map((e) => {
        return (
          <ItemBolo
            key={e.id}
            recheios={e.recheios}
            peso={e.peso}
            price={e.priceBolo}
            id={e.id}
            setRenderCarrinho={setRenderCarrinho}
            renderCarrinho={renderCarrinho}
          />
        );
      });

      const bolosDeForma = carrinho.bolosDeForma?.map((e) => {
        return (
          <ItemCarrinho
            key={e.id}
            id={e.id}
            name={e.title}
            quantity={e.quantity}
            price={e.price}
            priceTotal={e.priceTotal}
            category={e.category}
            setRenderCarrinho={setRenderCarrinho}
            renderCarrinho={renderCarrinho}
            image={e.image}
          />
        );
      });

      const docesTradicionais = carrinho.docesTradicionais?.map((e) => {
        return (
          <ItemCarrinho
            key={e.id}
            id={e.id}
            name={e.title}
            quantity={e.quantity}
            price={e.price}
            priceTotal={e.priceTotal}
            category={e.category}
            setRenderCarrinho={setRenderCarrinho}
            renderCarrinho={renderCarrinho}
            image={e.image}
          />
        );
      });

      const docesGourmet = carrinho.docesGourmet?.map((e) => {
        return (
          <ItemCarrinho
            key={e.id}
            id={e.id}
            name={e.title}
            quantity={e.quantity}
            price={e.price}
            priceTotal={e.priceTotal}
            category={e.category}
            setRenderCarrinho={setRenderCarrinho}
            renderCarrinho={renderCarrinho}
            image={e.image}
          />
        );
      });

      const docesFinos = carrinho.docesFinos?.map((e) => {
        return (
          <ItemCarrinho
            key={e.id}
            id={e.id}
            name={e.title}
            quantity={e.quantity}
            price={e.price}
            priceTotal={e.priceTotal}
            category={e.category}
            setRenderCarrinho={setRenderCarrinho}
            renderCarrinho={renderCarrinho}
            image={e.image}
          />
        );
      });

      const salgados = carrinho.salgados?.map((e) => {
        return (
          <ItemCarrinho
            key={e.id}
            id={e.id}
            name={e.title}
            quantity={e.quantity}
            price={e.price}
            priceTotal={e.priceTotal}
            category={e.category}
            setRenderCarrinho={setRenderCarrinho}
            renderCarrinho={renderCarrinho}
            image={e.image}
          />
        );
      });

      const frios = carrinho.frios?.map((e) => {
        return (
          <ItemCarrinho
            key={e.id}
            id={e.id}
            name={e.title}
            quantity={e.quantity}
            price={e.price}
            priceTotal={e.priceTotal}
            category={e.category}
            setRenderCarrinho={setRenderCarrinho}
            renderCarrinho={renderCarrinho}
            image={e.image}
          />
        );
      });

      const bebidas = carrinho.bebidas?.map((e) => {
        return (
          <ItemCarrinho
            key={e.id}
            id={e.id}
            name={e.title}
            quantity={e.quantity}
            price={e.price}
            priceTotal={e.priceTotal}
            category={e.category}
            setRenderCarrinho={setRenderCarrinho}
            renderCarrinho={renderCarrinho}
            image={e.image}
          />
        );
      });

      return [
        bolos,
        bolosDeForma,
        docesTradicionais,
        docesGourmet,
        docesFinos,
        salgados,
        frios,
        bebidas,
      ];
    }
  }
  return (
    <SContainer className={className}>
      <SContainerContent>{renderItens()}</SContainerContent>

      <Footer>
        <div className="flex justify-end pt-3 pb-7 ">
          <SButton onClick={() => setIsActive(2)}>Avançar</SButton>
        </div>
      </Footer>
    </SContainer>
  );
}
