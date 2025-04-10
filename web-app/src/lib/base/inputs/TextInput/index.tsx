import { ErrorLabel, Input, Label } from "../../styled/Inputs";

const TextInput = (props: Props.InputField) => {
  const { name, label, placeholder, error, input } = props;

  return (
    <Label>
      {label}
      <Input
        id={name}
        name={name}
        placeholder={placeholder}
        autoComplete={name}
        error={!!error}
        {...input}
      />
      <ErrorLabel>{error}</ErrorLabel>
    </Label>
  );
};

export default TextInput;
