import { useState } from "react";

import { ErrorMessage } from "@hookform/error-message";
import { FaEye, FaEyeSlash } from "react-icons/fa";

import { ErrorMessageTitle } from "@shared/ui/errors/errorMessageTitle/ErrorMessageTitle";
import { Icon } from "@shared/ui/icon/Icon";

import {
  InputBlockStyle,
  InputStyle,
  InputWrapperStyle,
  LabelStyle,
  ToggleButtonStyle,
} from "./inputField.style";
import { InputFieldProps } from "./inputField.types";

const InputField = <T extends Record<string, any>>({
  label,
  id,
  type = "text",
  placeholder = "",
  register,
  validation,
  errors,
  name,
  autoComplete,
  showToggleIcon = false,
}: InputFieldProps<T>) => {
  const [showPassword, setShowPassword] = useState(false);
  const inputType = showToggleIcon
    ? showPassword
      ? "text"
      : "password"
    : type;

  return (
    <>
      {label && (
        <LabelStyle htmlFor={id}>
          {label} <span aria-hidden="true">*</span>
        </LabelStyle>
      )}
      <InputWrapperStyle>
        <InputBlockStyle>
          <InputStyle
            required
            id={id}
            type={inputType}
            placeholder={placeholder}
            autoComplete={autoComplete}
            $hasError={!!errors[name]}
            {...register(name, validation)}
          />
          {showToggleIcon && (
            <ToggleButtonStyle
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              aria-label={showPassword ? "Hide password" : "Show password"}
              aria-pressed={showPassword}
              $active={showPassword}>
              <Icon aria-hidden="true">
                {showPassword ? <FaEye /> : <FaEyeSlash />}
              </Icon>
            </ToggleButtonStyle>
          )}
        </InputBlockStyle>
        <ErrorMessage
          errors={errors}
          name={name as any}
          render={({ message }) => (
            <ErrorMessageTitle>{message}</ErrorMessageTitle>
          )}
        />
      </InputWrapperStyle>
    </>
  );
};

export default InputField;
