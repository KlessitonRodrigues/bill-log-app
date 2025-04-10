import { useForm } from "react-hook-form";
import PasswordInput from "src/lib/base/inputs/PasswordInput";
import TextInput from "src/lib/base/inputs/TextInput";
import { ButtonMain, ButtonWhite } from "src/lib/base/StyledComponents/Buttons";
import { Row } from "src/lib/base/StyledComponents/Flex";
import { signInform } from "./form";
import Text from "src/lib/base/Text";
import { Form } from "src/lib/base/StyledComponents/Forms";
import authService from "src/services/auth";
import toast from "react-hot-toast";

const SignUpForm = (props: Props.SignUpFormProps) => {
  const { goLoginForm } = props;
  const { handleSubmit, register, formState } = useForm(signInform);

  const onSubmit = async (data: Form.SignUp) => {
    try {
      const res = await authService.signUp(data);
      toast.success("Nova conta criada com sucesso");
      goLoginForm?.();
    } catch (err: any) {
      toast.error(err.response?.data?.error);
    }
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Text tag="h1" className="text-center">
        Criar Conta
      </Text>
      <TextInput
        name="name"
        label="Email"
        placeholder="Enter your email"
        input={register("email")}
        error={formState.errors.email?.message}
      />
      <PasswordInput
        name="password"
        label="Password"
        placeholder="Enter your password"
        input={register("password")}
        error={formState.errors.password?.message}
      />
      <PasswordInput
        name="confirmPassword"
        label="Confirm Password"
        placeholder="Enter your confirm password"
        input={register("confirmPassword")}
        error={formState.errors.confirmPassword?.message}
      />
      <Row center>
        <ButtonMain>Criar conta</ButtonMain>
        <ButtonWhite type="button" onClick={goLoginForm}>
          Usar uma conta
        </ButtonWhite>
      </Row>
    </Form>
  );
};

export default SignUpForm;
