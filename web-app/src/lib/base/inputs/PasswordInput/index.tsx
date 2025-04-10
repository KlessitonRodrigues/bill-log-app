import { PiEyeBold, PiEyeClosedBold } from "react-icons/pi";
import {
  ErrorLabel,
  Input,
  InputIconRight,
  Label,
} from "../../StyledComponents/Inputs";
import { Row } from "../../StyledComponents/Flex";
import { useState } from "react";

const PasswordInput = (props: Props.InputField) => {
  const { name, label, placeholder, error } = props;
  const [visible, setVisible] = useState(false);

  return (
    <Label>
      {label}
      <Row>
        <Input
          type={visible ? "text" : "password"}
          id={name}
          name={name}
          placeholder={placeholder}
          autoComplete={name}
          error={!!error}
        />
        <InputIconRight>
          {visible ? (
            <PiEyeBold size={22} onClick={() => setVisible(!visible)} />
          ) : (
            <PiEyeClosedBold size={22} onClick={() => setVisible(!visible)} />
          )}
        </InputIconRight>
      </Row>

      <ErrorLabel>{error}</ErrorLabel>
    </Label>
  );
};

export default PasswordInput;
