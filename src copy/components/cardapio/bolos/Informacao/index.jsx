import { SButton } from "@/components/@ui/Buton";
import { SContainer } from "./style";
import { useRouter } from "next/router";
import { SLabel } from "../styles";
import { TextArea } from "@/components/carrinho/Modal2/TextArea";
import { useRef } from "react";
import { useContextState } from "@/components/contexts/ContextStatesBolo";
import { useCarrinho } from "@/hooks/useStorage";

export default function Informacao({ nav, className }) {
  const refObservacoes = useRef();
  const router = useRouter();
  const { getStorage, setStorage } = useCarrinho();
  const { state, setState } = useContextState();
  return (
    <SContainer className={className}>
      <SLabel>Observações</SLabel>
      <TextArea
        ref={refObservacoes}
        onChange={() =>
          setState({ ...state, observacoesBolo: refObservacoes.current.value })
        }
        description="Descreva como prefere sua decoração ou cobertura."
      />

      <div className={`flex gap-5`}>
        <SButton
          type="button"
          onClick={() => {
            router.push("#header");
            nav("formato");
          }}
        >
          Voltar
        </SButton>
        <SButton
          type="button"
          onClick={() => {
            const carrinho = getStorage();

            setStorage({
              ...carrinho,
              bolos: [...carrinho.bolos, state],
              vazio: false,
            });
            nav("adicionado");
          }}
        >
          Adicionar ao carrinho
        </SButton>
      </div>
    </SContainer>
  );
}
