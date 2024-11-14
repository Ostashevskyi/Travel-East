import { FormFieldProps } from "../../types/Form";

const FormInput = ({
  error,
  name,
  placeholder,
  register,
  type,
}: FormFieldProps) => {
  return (
    <>
      <input
        type={type}
        placeholder={placeholder}
        {...register(name)}
        className="w-full bg-white py-4 px-3 text-form-input rounded-md focus:outline-none"
      />
      {error ? (
        <span className="h-6 text-red-500">{error.message}</span>
      ) : (
        <p className="h-6"></p>
      )}
    </>
  );
};

export default FormInput;
