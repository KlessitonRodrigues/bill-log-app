declare namespace Form {
  type SignIn = {
    email?: string;
    password?: string;
  };

  type SignUp = {
    cpf?: string;
    email?: string;
    password?: string;
    confirmPassword?: string;
    rule?: string;
    name?: string;
  };

  type BillLog = {
    cpf?: string;
    date?: string;
    description?: string;
    pointsAmount?: string;
    amount?: string;
    status?: string;
  };
}
