import { useState } from "react";
import { ErrorMessage } from "@hookform/error-message";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import {
  InputWrapper,
  ToggleButton,
  LabelStyle,
  InputStyle,
  InputBlock,
} from "./inputField.style";
import { ErrorMessageTitle } from "../errorMessage/ErrorMessage";

const InputField = ({
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
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const inputType = showToggle ? (showPassword ? "text" : "password") : type;

  return (
    <>
      {label && (
        <LabelStyle htmlFor={id}>
          {label} <span>*</span>
        </LabelStyle>
      )}
      <InputWrapper>
        <InputBlock>
          <InputStyle
            id={id}
            type={inputType}
            placeholder={placeholder}
            autoComplete={autoComplete}
            hasError={!!errors[name]}
            {...register(name, validation)}
          />
          {showToggle && (
            <ToggleButton
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}>
              {showPassword ? <FaEye /> : <FaEyeSlash />}
            </ToggleButton>
          )}
        </InputBlock>
        <ErrorMessage
          errors={errors}
          name={name}
          render={({ message }) => (
            <ErrorMessageTitle>{message}</ErrorMessageTitle>
          )}
        />
      </InputWrapper>
    </>
  );
};

export default InputField;
