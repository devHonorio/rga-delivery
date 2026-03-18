import { forwardRef, useId } from "react";
import { Input, Label } from "../../styles";

export const TextArea = forwardRef(({ label, description, ...rest }, ref) => {
  const id = useId();
  return (
    <div className={`flex flex-col gap-2`}>
      <Label htmlFor={id}>{label}</Label>
      <Input
        $as="textarea"
        id={id}
        placeholder={description}
        ref={ref}
        {...rest}
      />
    </div>
  );
});
