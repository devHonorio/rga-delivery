import { createContext, useContext, useState } from "react";

export const States = createContext();

export default function ContextStateBolos({ children }) {
  const [state, setState] = useState({
    price: 0,
    peso: 0,
    bento: false,
    recheios: [],
    formato: null,
  });
  return (
    <States.Provider value={{ state, setState }}>{children}</States.Provider>
  );
}

export const useContextState = () => {
  const { state, setState } = useContext(States);
  return { state, setState };
};
