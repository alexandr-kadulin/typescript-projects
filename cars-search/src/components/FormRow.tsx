import { FormRowInput, Label } from "../styledComponents";
import { FormRowProps } from "../types";

const FormRow = ({
  type,
  name,
  value,
  labelText,
  handleChange,
}: FormRowProps) => {
  return (
    <>
      <Label htmlFor={name}>{labelText || name}</Label>
      <FormRowInput
        type={type}
        value={value}
        name={name}
        onChange={handleChange}
      />
    </>
  );
};

export default FormRow;
