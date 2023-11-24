import { SButton } from "@/components/@ui/Buton";
import { SContainer, SContainerBolinha, STitleSeuCarrinho } from "./styles";
import Bolinha from "./Bolinha";

export default function HeaderCarrinho({ isActive }) {
  return (
    <SContainer>
      <div>
        <SContainerBolinha>
          <Bolinha content={1} divider="orange" isActive />
          <Bolinha
            content={2}
            divider={isActive > 1 ? "orange" : true}
            isActive={isActive > 1}
          />
          <Bolinha content={3} isActive={isActive > 2} />
        </SContainerBolinha>
        <STitleSeuCarrinho>Seu carrinho:</STitleSeuCarrinho>
      </div>

      <SButton
        className="bg-white shadow-md h-12"
        onClick={() => history.back()}
      >
        Fechar
      </SButton>
    </SContainer>
  );
}
