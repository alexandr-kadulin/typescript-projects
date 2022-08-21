import { FormRowInput, Label } from "../styledComponents";

type FormRowProps = {
  type: string;
  name: string;
  value: string;
  labelText?: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

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
