import { SContainer } from "./styles";
import { SButton } from "@/components/@ui/Buton";

import Input from "./Input";

import { useContextState } from "@/components/contexts/ContextStatesBolo";
import { usePeso } from "@/hooks/useBolo";
import Modal from "./Input/modal";
import { useState } from "react";
import { useRouter } from "next/router";

export default function Peso({ className, nav }) {
  const { state } = useContextState();
  const [active, setActive] = useState(false);
  const router = useRouter();

  function avancar() {
    usePeso(state.peso) && nav("recheios");
    router.push("#header");
  }
  return (
    <SContainer className={className}>
      <Modal active={active} setActive={setActive} />
      <Input
        onClick={() => {
          setActive(true);
        }}
      />

      <SButton type="button" onClick={avancar}>
        Avançar
      </SButton>
    </SContainer>
  );
}
