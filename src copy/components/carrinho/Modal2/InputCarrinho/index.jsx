import { forwardRef, useId } from "react";
import { Input, Label } from "../../styles";

export const InputCarrinho = forwardRef(
  ({ label, type, typeOf, className, min = "", max = "" }, ref) => {
    const id = useId();
    return (
      <div className={`flex flex-col gap-2 ${className}`}>
        <Label htmlFor={id}>{label}</Label>
        <Input
          required
          id={id}
          type={type}
          typeof={typeOf}
          ref={ref}
          min={min}
          max={max}
        />
      </div>
    );
  },
);
