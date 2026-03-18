import Footer from "./Footer";
import Header from "./Header";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

import * as S from "./styles";

import FloatCarrinho from "./FloatCarrinho";
import { useEffect } from "react";

export default function Layout({ children }) {
  useEffect(() => {
    if (
      !localStorage.getItem("carrinho") ||
      !JSON.parse(localStorage.getItem("carrinho")).bolosDeForma
    ) {
      localStorage.setItem(
        "carrinho",
        JSON.stringify({
          bolos: [],
          bolosDeForma: [],
          docesTradicionais: [],
          docesGourmet: [],
          docesFinos: [],
          salgados: [],
          frios: [],
          bebidas: [],
          vazio: true,
        }),
      );
    }
  }, []);
  return (
    <>
      <S.LayoutContainer>
        <ToastContainer autoClose={500} />
        <Header />

        {children}
      </S.LayoutContainer>
      <FloatCarrinho />
      <Footer />
    </>
  );
}
