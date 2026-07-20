import { z } from "zod";

export const addMemberSchema = z.object({
  email: z.string().min(1, "Email is required").email("Invalid email address"),

  user_name: z
    .string()
    .min(1, "Username is required")
    .min(3, "Username must be at least 3 characters"),
});

export type AddMemberFormValues = z.infer<typeof addMemberSchema>;
