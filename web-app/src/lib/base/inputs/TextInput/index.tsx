import { ErrorLabel, Input, Label } from "../../StyledComponents/Inputs";

const TextInput = (props: Props.InputField) => {
  const { name, label, placeholder, error } = props;

  return (
    <Label>
      {label}
      <Input
        id={name}
        name={name}
        placeholder={placeholder}
        autoComplete={name}
        error={!!error}
      />
      <ErrorLabel>{error}</ErrorLabel>
    </Label>
  );
};

export default TextInput;
