import Image from "next/image";
import Navigation from "./Navigation";
import Link from "next/link";
import { Cart, Menu } from "../comum/Icons";
import { useState } from "react";
import ButtonIcon from "../comum/ButtonIcon";

import * as S from "./styles";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <S.Header id="header">
      <Link href="/">
        <Image
          src="/logo.png"
          alt="Logo"
          width={50}
          height={50}
          className="lg:w-20 w-10"
        />
      </Link>
      <Navigation isOpen={isOpen} setIsOpen={setIsOpen} />
      <S.ContainerMenu>
        <ButtonIcon
          icon={<Cart strokeWidth={1.5} className={"h-5 w-5 "} />}
          content="Meu pedido"
          align="flex-row-reverse"
          href={"/carrinho"}
        />
        <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden">
          <Menu className="h-6 w-6" />
        </button>
      </S.ContainerMenu>
    </S.Header>
  );
}
