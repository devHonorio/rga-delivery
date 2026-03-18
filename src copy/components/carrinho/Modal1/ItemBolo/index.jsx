import { Close } from "@/components/comum/Icons";
import {
  BtnRemove,
  SContainer,
  SContainerButtons,
  SContainerPriceTitle,
  SPrice,
} from "./styles";
import Image from "next/image";
import { useCarrinho } from "@/hooks/useStorage";
import { useFormatToRealBRL } from "@/hooks/useFormatRealBRL";

export default function ItemBolo({
  peso,
  recheios,
  price,
  id,
  renderCarrinho,
  setRenderCarrinho,
}) {
  const { getStorage, setStorage } = useCarrinho();

  function removeBolo() {
    const carrinho = getStorage();
    const listaNovaBolo = carrinho.bolos?.filter((e) => e.id != id);
    setStorage({ ...carrinho, bolos: listaNovaBolo });
    setRenderCarrinho(!renderCarrinho);
  }

  return (
    <SContainer>
      <div className="flex flex-col gap-4">
        {recheios?.map((e) =>
          e.image ? (
            <Image
              src={e.image}
              width={100}
              height={100}
              className="h-16 w-16 rounded-lg object-cover"
              alt="Foto do produto"
            />
          ) : (
            ""
          ),
        )}
      </div>

      <div className="flex-1">
        <SContainerPriceTitle>
          {peso == 0.6 ? "Bento" : peso + "kg"}{" "}
          {recheios?.map((e) => e.name + " ")}
        </SContainerPriceTitle>
        <SPrice>{useFormatToRealBRL(price)}</SPrice>
      </div>
      <SContainerButtons>
        <BtnRemove onClick={removeBolo}>
          <Close strokeWidth={3} className="h-4 w-4" />
        </BtnRemove>
      </SContainerButtons>
    </SContainer>
  );
}
