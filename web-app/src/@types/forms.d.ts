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

  type BillLog = {
    cpf?: string;
    date?: string;
    description?: string;
    pointsAmount?: string;
    amount?: string;
    status?: string;
  };
}
