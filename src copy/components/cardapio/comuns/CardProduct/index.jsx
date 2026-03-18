import Image from "next/image";

import { SContainerCard, SPrice, STitle } from "./styles";
import ButtonAddAndRemove from "./ButtonAddAndRemove";
import { useFormatToRealBRL } from "@/hooks/useFormatRealBRL";

export default function CardProduct({
  title,
  image,
  price,
  category,
  value,
  step = 5,
  minInit = 20,
}) {
  return (
    <SContainerCard>
      <Image
        width={100}
        height={100}
        src={image}
        alt={title}
        className="w-full rounded-3xl h-full object-cover"
      />

      <STitle>{title}</STitle>

      <SPrice>{useFormatToRealBRL(price)}</SPrice>

      <ButtonAddAndRemove
        step={step}
        category={category}
        value={value}
        minInit={minInit}
      />
    </SContainerCard>
  );
}
