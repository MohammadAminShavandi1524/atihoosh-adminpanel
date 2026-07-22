import { z } from "zod";

export const blogSchema = (t: (key: string) => string) =>
  z.object({
    parent_blog: z
      .number()
      .min(1, t("forms.blog.validation.parentBlogRequired")),

    title: z.string().min(1, t("forms.blog.validation.titleRequired")),

    image: z
      .string()
      .url(t("forms.blog.validation.imageInvalid"))
      .optional()
      .or(z.literal("")),

    description: z
      .string()
      .min(1, t("forms.blog.validation.descriptionRequired")),
  });

export type BlogFormValues = z.infer<ReturnType<typeof blogSchema>>;
