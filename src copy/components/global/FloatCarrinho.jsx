import Link from "next/link";
import * as S from "./styles";
import { Cart } from "../comum/Icons";

export default function FloatCarrinho() {
  return (
    <Link
      href={"carrinho"}
      onClick={() => {
        sessionStorage.clear();
      }}
    >
      <div className="fixed right-8 bottom-10 z-50">
        <S.FloatCarrinho>
          <Cart className="h-6 w-6" />
        </S.FloatCarrinho>
      </div>
    </Link>
  );
}
