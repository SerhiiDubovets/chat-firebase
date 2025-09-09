export interface SignUpFormValues {
  username: string;
  email: string;
  password: string;
  name?: any;
}

export interface SignUpFormExtended extends SignUpFormValues {
  root?: {
    serverError?: any;
  };
}
