import { ErrorLabel, Input, Label } from "../../styled/Inputs";

const NumberInput = (props: Props.InputField) => {
  const { name, label, placeholder, error, input } = props;

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
        onKeyDown={(ev) => {
          if (ev.key.length === 1 && ev.key.match(/[\D]/g)) {
            ev.preventDefault();
          }
        }}
        {...input}
      />
      <ErrorLabel>{error}</ErrorLabel>
    </Label>
  );
};

export default NumberInput;
