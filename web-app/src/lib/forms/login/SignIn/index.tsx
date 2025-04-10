import { useForm } from "react-hook-form";
import PasswordInput from "src/lib/base/inputs/PasswordInput";
import TextInput from "src/lib/base/inputs/TextInput";
import { ButtonMain, ButtonWhite } from "src/lib/base/styled/Buttons";
import { Row } from "src/lib/base/styled/Flex";
import { signInform } from "./form";
import Text from "src/lib/base/common/Text";
import authService from "src/services/auth";
import { Form } from "src/lib/base/styled/Forms";
import toast from "react-hot-toast";
import { CardWhite } from "src/lib/base/styled/Card";

const SignInForm = (props: Props.SignInFormProps) => {
  const { goAccountForm } = props;
  const { handleSubmit, register, formState } = useForm(signInform);

  const onSubmit = async (data: Form.SignIn) => {
    try {
      const res = await authService.signIn(data);
      console.log(res);
      toast.success("Login realizado com sucesso");
    } catch (err: any) {
      toast.error(err.response?.data?.error);
    }
  };

  return (
    <CardWhite p={8}>
      <Form onSubmit={handleSubmit(onSubmit)}>
        {formState.errors.root?.message}
        <Text tag="h1" className="text-center" size={32}>
          Login
        </Text>
        <TextInput
          name="email"
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
        <Row center>
          <ButtonMain>Entrar</ButtonMain>
          <ButtonWhite type="button" onClick={goAccountForm}>
            Criar nova conta
          </ButtonWhite>
        </Row>
      </Form>
    </CardWhite>
  );
};

export default SignInForm;
