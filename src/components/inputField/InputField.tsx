import { ErrorMessage } from "@hookform/error-message";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

import {
  InputBlockStyle,
  InputStyle,
  InputWrapperStyle,
  LabelStyle,
  ToggleButtonStyle,
} from "./inputField.style";

import { InputFieldProps } from "./inputField.types";

import { ErrorMessageTitle } from "../errors/errorMessageTitle/ErrorMessageTitle";
import { Icon } from "../icon/Icon";

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
  showToggle = false,
}: InputFieldProps<T>) => {
  const [showPassword, setShowPassword] = useState(false);
  const inputType = showToggle ? (showPassword ? "text" : "password") : type;

  return (
    <>
      {label && (
        <LabelStyle htmlFor={id}>
          {label} <span>*</span>
        </LabelStyle>
      )}
      <InputWrapperStyle>
        <InputBlockStyle>
          <InputStyle
            id={id}
            type={inputType}
            placeholder={placeholder}
            autoComplete={autoComplete}
            hasError={!!errors[name]}
            {...register(name, validation)}
          />
          {showToggle && (
            <ToggleButtonStyle
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}>
              <Icon color={showPassword ? "#444" : "#d2cece"}>
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
