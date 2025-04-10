import Select from "react-select";
import { ErrorLabel, Label } from "../../styled/Inputs";

const SelectionInput = (props: Props.SelectionField) => {
  const { label, placeholder, error, options } = props;

  return (
    <Label>
      {label}
      <Select
        className="react-selector"
        classNamePrefix="react-selector"
        closeMenuOnSelect
        isClearable
        placeholder={placeholder}
        options={options}
      />
      <ErrorLabel>{error}</ErrorLabel>
    </Label>
  );
};

export default SelectionInput;
