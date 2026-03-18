import { useButtonAddAndRemove } from "./hooks/useButtonAddAndRemove";
import { SButtons, SContainer, SQuantity } from "./styles";

export default function ButtonAddAndRemove({ category, value, step, minInit }) {
  const { adicione, refQuantity, subtrai } = useButtonAddAndRemove(
    category,
    value,
    step,
    minInit
  );
  return (
    <>
      <SContainer>
        <SButtons onClick={subtrai}>-</SButtons>

        <SQuantity
          placeholder="0"
          ref={refQuantity}
          defaultValue={0}
          min={0}
          step={step}
          disabled
        />

        <SButtons onClick={adicione}>+</SButtons>
      </SContainer>
    </>
  );
}
