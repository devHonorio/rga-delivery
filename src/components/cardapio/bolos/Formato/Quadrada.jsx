import { useContextState } from "@/components/contexts/ContextStatesBolo";
import { SContainerRetangular, SContentRetangular } from "./styles";

export default function Quadrado() {
  const { state, setState } = useContextState();
  const formato = state.formato;
  return (
    <>
      <input
        type="radio"
        value="retangular"
        name="formato"
        id="retangular"
        className={`hidden`}
      />
      <label htmlFor="retangular">
        <SContainerRetangular
          data-formato={formato}
          onClick={() => {
            setState({ ...state, formato: "retangular" });
          }}
        >
          <SContentRetangular data-formato={formato}>
            Retangular
          </SContentRetangular>
        </SContainerRetangular>
      </label>
    </>
  );
}
