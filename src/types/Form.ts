import { FieldError, UseFormRegister } from "react-hook-form";

export type FormData = {
  email: string;
  name: string;
  phone: string;
};

export type FormFieldProps = {
  type: string;
  placeholder: string;
  name: ValidFieldNames;
  register: UseFormRegister<FormData>;
  error: FieldError | undefined;
};

export type ValidFieldNames = "email" | "name" | "phone";
