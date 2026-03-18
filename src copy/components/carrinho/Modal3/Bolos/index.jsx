import Image from "next/image";
import tw from "tailwind-styled-components";

const Container = tw.div`flex items-center gap-4 py-5`;
const Title = tw.p`text-md font-semibold `;
const Price = tw.p`text-md font-bold text-orange-400`;
const Quantity = tw.p`font-bold text-xl`;

export default function Bolos({ id, peso, recheios, price }) {
  return (
    <Container>
      {recheios.map((e) => {
        return (
          <Image
            key={e.id}
            src={e.image}
            alt={e.name}
            width={100}
            height={100}
            className="w-16 h-16 rounded-xl object-cover"
          />
        );
      })}

      <div className="flex-1">
        <Title>
          {peso}kg {recheios?.map((e) => e.name + " ")}
        </Title>
        <Price>
          {price?.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </Price>
      </div>

      <Quantity>x1</Quantity>
    </Container>
  );
}
