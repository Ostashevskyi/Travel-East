import SubmitButton from "../Buttons/SubmitButton";
import { useForm } from "react-hook-form";
import FormInput from "../Inputs/FormInput";
import { FormData } from "../../types/Form";
import { zodResolver } from "@hookform/resolvers/zod";
import { BookFormSchema } from "../../schemas/BookFormSchema";

const BookForm = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<FormData>({
    resolver: zodResolver(BookFormSchema),
  });

  const onSubmit = async (data: FormData) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-4 max-w-[400px] justify-center m-auto header-blur py-14 px-5 rounded-md mb-20"
    >
      <FormInput
        name="name"
        register={register}
        placeholder="Name"
        type="text"
        error={errors.name}
      />
      <FormInput
        name="phone"
        register={register}
        placeholder="Phone"
        type="text"
        error={errors.phone}
      />
      <FormInput
        name="email"
        register={register}
        placeholder="Email"
        type="email"
        error={errors.email}
      />
      <SubmitButton type="submit">Submit</SubmitButton>
    </form>
  );
};

export default BookForm;
