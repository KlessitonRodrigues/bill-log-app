declare namespace Form {
  type SignIn = {
    email?: string;
    password?: string;
  };

  type SignUp = {
    email?: string;
    password?: string;
    confirmPassword?: string;
  };
}
