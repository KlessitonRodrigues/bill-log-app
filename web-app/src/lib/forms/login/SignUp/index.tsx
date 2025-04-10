import { useForm } from "react-hook-form";
import PasswordInput from "src/lib/base/inputs/PasswordInput";
import TextInput from "src/lib/base/inputs/TextInput";
import {
  ButtonGreen,
  ButtonWhite,
} from "src/lib/base/StyledComponents/Buttons";
import { Column, Row } from "src/lib/base/StyledComponents/Flex";
import { signInform } from "./form";
import Text from "src/lib/base/Text";

type SignUpFormProps = {
  onClick?: () => void;
};

const SignUpForm = (props: SignUpFormProps) => {
  const { onClick } = props;
  const { handleSubmit, formState } = useForm(signInform);
  const { errors } = formState;

  const onSubmit = async (ev: any) => {
    ev.preventDefault();
    const formData = new FormData(ev.target);
    const data = Object.fromEntries(formData.entries());
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Column left gap={8}>
        <Row center>
          <Text tag="h1">Criar Conta</Text>
        </Row>
        <TextInput
          label="Email"
          name="email"
          placeholder="Enter your email"
          error={errors.email?.message}
        />
        <PasswordInput
          label="Password"
          name="password"
          placeholder="Enter your password"
          error={errors.password?.message}
        />
        <PasswordInput
          label="Confirm Password"
          name="password_confirm"
          placeholder="Enter your confirm password"
          error={errors.password?.message}
        />
        <Row center>
          <ButtonGreen>Criar conta</ButtonGreen>
          <ButtonWhite type="button" onClick={onClick}>
            Usar uma conta
          </ButtonWhite>
        </Row>
      </Column>
    </form>
  );
};

export default SignUpForm;
