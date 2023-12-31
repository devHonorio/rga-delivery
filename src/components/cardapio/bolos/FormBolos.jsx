import Peso from "./Peso";

import { useState } from "react";
import Adicionado from "./adicionado";

import NewBolo from "./NewBolo";

import Recheios from "./Recheios";
import Formato from "./Formato";
import Informacao from "./Informacao";

export default function FormBolos({ className }) {
  const [nav, setNav] = useState("novo-bolo");

  return (
    <form className={`flex flex-col items-center gap-8 ${className}`}>
      <NewBolo className={nav !== "novo-bolo" && "hidden"} nav={setNav} />

      <Peso className={nav !== "peso" && "hidden"} nav={setNav} />

      {nav == "recheios" && <Recheios nav={setNav} />}

      <Formato className={nav !== "formato" && "hidden"} nav={setNav} />

      <Informacao className={nav !== "informações" && "hidden"} nav={setNav} />

      <Adicionado className={nav !== "adicionado" && "hidden"} nav={setNav} />
    </form>
  );
}
