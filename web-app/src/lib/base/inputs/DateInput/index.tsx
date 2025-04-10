import { ErrorLabel, Input, Label } from "../../styled/Inputs";

const DateInput = (props: Props.InputField) => {
  const { name, label, placeholder, error, input } = props;

  return (
    <Label>
      {label}
      <Input
        type="date"
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

export default DateInput;
