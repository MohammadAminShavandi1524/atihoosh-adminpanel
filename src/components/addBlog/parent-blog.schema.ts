import { z } from "zod";

export const parentBlogSchema = (t: (key: string) => string) =>
  z.object({
    root_blog: z
      .number()
      .min(1, t("forms.parentBlog.validation.rootBlogRequired")),

    category: z
      .string()
      .min(1, t("forms.parentBlog.validation.categoryRequired")),

    lang: z.enum(["fa", "en"]),

    tags: z.array(
      z.object({
        id: z.string(),
        label: z.string(),
      }),
    ),

    title: z
      .string()
      .min(1, t("forms.parentBlog.validation.titleRequired")),

    description: z
      .string()
      .min(1, t("forms.parentBlog.validation.descriptionRequired")),

    image: z
      .string()
      .url(t("forms.parentBlog.validation.imageInvalid"))
      .or(z.literal("")),
  });

export type ParentBlogFormValues = z.infer<
  ReturnType<typeof parentBlogSchema>
>;