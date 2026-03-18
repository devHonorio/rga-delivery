import { Map } from "@/components/comum/Icons";
import tw from "tailwind-styled-components";
import Footer from "../Layout/FooterCarrinho";
import ItensEtp2 from "../ItensEtapa3";
import { SButton } from "@/components/@ui/Buton";
import { useRouter } from "next/router";
import { useCarrinho } from "@/hooks/useStorage";
import Bolos from "./Bolos";
import { useMensage } from "@/hooks/useMensage";
import { FaWhatsapp } from "react-icons/fa";

const Container = tw.div`flex flex-col `;
const Title = tw.p`text-xl font-semibold`;
const ContainerRua = tw.address`flex items-center gap-4  py-5`;
const DivIcon = tw.div`flex justify-center items-center h-10 w-10 bg-orange-200 rounded-xl`;
const Endereco = tw.p`text-lg font-semibold not-italic`;
const ContainerItens = tw.div`divide-y pt-3`;

export default function Modal3({ className, setIsActive }) {
  const { getStorage } = useCarrinho();

  let carrinho = getStorage();

 

  function renderItens() {
    if (carrinho) {
      const bolos = carrinho.bolos?.map((e) => {
        return (
          <Bolos
            key={e.id}
            id={e.id}
            peso={e.peso}
            recheios={e.recheios}
            price={e.priceBolo}
            image={e.image}
          />
        );
      });
      const bolosDeForma = carrinho.bolosDeForma?.map((e) => {
        return (
          <ItensEtp2
            key={e.id}
            image={e.image}
            id={e.id}
            name={e.title}
            quantity={e.quantity}
            priceTotal={e.priceTotal}
          />
        );
      });
      const docesTradicionais = carrinho.docesTradicionais?.map((e) => {
        return (
          <ItensEtp2
            key={e.id}
            image={e.image}
            id={e.id}
            name={e.title}
            quantity={e.quantity}
            priceTotal={e.priceTotal}
          />
        );
      });

      const docesGourmet = carrinho.docesGourmet?.map((e) => {
        return (
          <ItensEtp2
            key={e.id}
            image={e.image}
            id={e.id}
            name={e.title}
            quantity={e.quantity}
            priceTotal={e.priceTotal}
          />
        );
      });

      const docesFinos = carrinho.docesFinos?.map((e) => {
        return (
          <ItensEtp2
            key={e.id}
            image={e.image}
            id={e.id}
            name={e.title}
            quantity={e.quantity}
            priceTotal={e.priceTotal}
          />
        );
      });

      const frios = carrinho.frios?.map((e) => {
        return (
          <ItensEtp2
            key={e.id}
            image={e.image}
            id={e.id}
            name={e.title}
            quantity={e.quantity}
            priceTotal={e.priceTotal}
          />
        );
      });

      const salgados = carrinho.salgados?.map((e) => {
        return (
          <ItensEtp2
            key={e.id}
            image={e.image}
            id={e.id}
            name={e.title}
            quantity={e.quantity}
            priceTotal={e.priceTotal}
          />
        );
      });

      const bebidas = carrinho.bebidas?.map((e) => {
        return (
          <ItensEtp2
            key={e.id}
            image={e.image}
            id={e.id}
            name={e.title}
            quantity={e.quantity}
            priceTotal={e.priceTotal}
          />
        );
      });

      return [
        bolos,
        bolosDeForma,
        docesTradicionais,
        docesGourmet,
        docesFinos,
        frios,
        salgados,
        bebidas,
      ];
    }
  }

  const router = useRouter();

  const {message, URLMessage } = useMensage();

  

  return (
    <Container className={className}>
      <Title>Itens do seu pedido:</Title>

    
      <p>
        Atenção o valor do frete final ainda pode estar sendo alterado conforme
        o pedido e destino
      </p>
      <ContainerItens>{renderItens()}</ContainerItens>
      {carrinho.entrega && (
        <>
          <Title>Local entrega:</Title>
          <ContainerRua>
            <DivIcon>
              <Map />
            </DivIcon>

            <Endereco>
              {carrinho.entrega.rua} - {carrinho.entrega.number},{" "}
              {carrinho.entrega.bairro}, {carrinho.entrega.cidade}
            </Endereco>
          </ContainerRua>
        </>
      )}

      <Footer>
        <div className="flex justify-end gap-4 py-7">
          <SButton onClick={() => setIsActive(2)} className="bg-white">
            Voltar
          </SButton>
          <SButton
            $as="a"
            href={`https://api.whatsapp.com/send?phone=46988158699&text=${URLMessage}`}
            target="_blank"
            onClick={async () => {
              console.log(message);
              await navigator.clipboard.writeText(message)
              localStorage.removeItem("carrinho");
              router.push("/");
            }}
          >
            <div className="flex gap-2 items-center">
              Enviar no whatsapp
              <FaWhatsapp className="h-6 w-6" />
            </div>
          </SButton>
        </div>
      </Footer>
    </Container>
  );
}
