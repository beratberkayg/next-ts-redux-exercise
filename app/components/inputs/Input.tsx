"use client";

import { useFormRegister, FieldValues, FieldErros } from "react-hook-form";

type InputProps = {
  id: string;
  type: string;
  placeholder: string;
  required: boolean;
  register: useFormRegister<FieldValues>;
  errors: FieldErros;
};

const Input: React.FC<InputProps> = ({
  id,
  type,
  placeholder,
  required,
  register,
  errors,
}) => {
  return <div>Input</div>;
};

export default Input;
