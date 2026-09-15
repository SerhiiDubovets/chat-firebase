import {
  FieldErrors,
  FieldValues,
  Path,
  RegisterOptions,
  UseFormRegister,
} from "react-hook-form";

export interface InputFieldProps<T extends FieldValues> {
  label: string;
  id: string;
  name: Path<T>;
  type?: string;
  placeholder?: string;
  autoComplete?: string;
  showToggleIcon?: boolean;
  register: UseFormRegister<T>;
  validation?: RegisterOptions<T, Path<T>>;
  errors: FieldErrors<T>;
  touched?: Partial<Record<keyof T, boolean>>;
  isSubmitted?: boolean;
}

export interface InputStyleProps {
  $hasError?: boolean;
}

export interface ToggleButtonStyleProps {
  $active: boolean;
}
