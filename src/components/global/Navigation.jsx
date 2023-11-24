import { Close } from "../comum/Icons";
import Nlink from "../comum/NLink";
import * as S from "./styles";

export default function Navigation({ isOpen, setIsOpen }) {
  return (
    <S.Nav className={!isOpen && " hidden "}>
      <S.Button onClick={() => setIsOpen(!isOpen)}>
        <Close className="h-6 w-6" />
      </S.Button>

      <Nlink href="/" content="Home" className="lg:hidden" />
      <Nlink href="/Cardapio" content="Cardapio" />
      <Nlink href="/reservas" content="Reservas" />
      <Nlink href="/pedidos" content="Meus pedidos" />
    </S.Nav>
  );
}
