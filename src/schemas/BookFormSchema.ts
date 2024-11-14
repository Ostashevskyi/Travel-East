import { z, ZodType } from "zod";
import validator from "validator";
import { FormData } from "../types/Form";

export const BookFormSchema: ZodType<FormData> = z.object({
  email: z.string().email("Email is required"),
  name: z.string().trim().min(1, { message: "Name is required" }),
  phone: z.string().refine(validator.isMobilePhone),
});
