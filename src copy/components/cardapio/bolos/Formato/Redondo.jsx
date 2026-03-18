import { useContextState } from "@/components/contexts/ContextStatesBolo";
import { SContainerRedondo, SContentRedondo } from "./styles";

export default function Redondo() {
  const { state, setState } = useContextState();
  const formato = state.formato;
  return (
    <div>
      <input type="radio" name="formato" id="redondo" className={`hidden`} />
      <label htmlFor="redondo">
        <SContainerRedondo
          data-formato={formato}
          onClick={() => {
            setState({ ...state, formato: "redondo" });
          }}
        >
          <SContentRedondo data-formato={formato}>Redondo</SContentRedondo>
        </SContainerRedondo>
      </label>
    </div>
  );
}
