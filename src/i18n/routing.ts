import { defaultLanguage } from "@/constants";
import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["en", "fa"],
  defaultLocale: defaultLanguage,
  pathnames: {
    "/": "/",
    "/pathnames": {
      fa: "/مسیرها",
    },
  },
});
