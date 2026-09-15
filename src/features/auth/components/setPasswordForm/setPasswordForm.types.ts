export interface SetPasswordFormValues {
  password: string;
  confirmPassword: string;
  name?: any;
}

export interface SetPasswordFormExtended extends SetPasswordFormValues {
  root?: {
    serverError?: string;
  };
}
