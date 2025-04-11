import { ErrorLabel, Input, Label } from "../../styled/Inputs";

const TextInput = (props: Props.InputField) => {
  const { name, label, placeholder, error, input, value, onChange } = props;

  return (
    <Label>
      {label}
      <Input
        type="text"
        id={name}
        name={name}
        placeholder={placeholder}
        autoComplete={name}
        error={!!error}
        value={value}
        onChange={(ev) => onChange?.(ev.target.value)}
        {...input}
      />
      <ErrorLabel>{error}</ErrorLabel>
    </Label>
  );
};

export default TextInput;
