"use client";

import Link from "next/link";
import {
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  X,
} from "lucide-react";
import { ContactItem } from "./contactItem";
import { useLocale, useTranslations } from "next-intl";
import { englishToPersianNumber } from "@/lib/utils";

interface ContactInfoProps {}

const socials = [
  {
    icon: Instagram,
    href: "#",
  },
  {
    icon: Linkedin,
    href: "#",
  },
  {
    icon: X,
    href: "#",
  },
  {
    icon: Send,
    href: "#",
  },
];

const ContactInfo = ({}: ContactInfoProps) => {
  const t = useTranslations("ContactUs.ContactInfo");
  const locale = useLocale();

  return (
    <div className="border-border bg-secondary-bg col-span-1 flex flex-col rounded-2xl border p-8 md:p-10">
      <span className="text-primary text-sm font-medium tracking-[0.15em] uppercase">
        {t("badge")}
      </span>

      <h2 className="mt-4 text-3xl font-bold">{t("title")}</h2>

      <div className="mt-12 space-y-8">
        <ContactItem label={t("addressLabel")} Logo={MapPin}>
          {t("addressValue")}
        </ContactItem>

        <ContactItem Logo={Mail} label={t("emailLabel")}>
          <Link
            href="mailto:atihooshco@gmail.com"
            className="hover:text-primary transition-colors"
          >
            atihooshco@gmail.com
          </Link>
        </ContactItem>

        <ContactItem Logo={Phone} label={t("phoneLabel")}>
          <Link
            href="tel:+982100000000"
            dir="ltr"
            className="hover:text-primary inline-block transition-colors"
          >
            {locale === "en" ? (
              <>{t("phoneNumber")}</>
            ) : (
              <>{englishToPersianNumber(t("phoneNumber"))}</>
            )}
          </Link>
        </ContactItem>
      </div>

      {/* separator */}
      <div className="border-foreground/8 my-10 border-t" />

      <div className="mb-6">
        <h3 className="text-2xl font-semibold">{t("followTitle")}</h3>

        <div className="mt-6 flex flex-wrap gap-3">
          {socials.map(({ icon: Icon, href }, index) => (
            <Link
              key={index}
              href={href}
              className="border-muted-foreground hover:border-primary hover:text-primary text-primary-hover flex size-12 items-center justify-center rounded-xl border transition-colors"
            >
              <Icon className="size-5" />
            </Link>
          ))}
        </div>
      </div>

      <div className="border-primary/20 bg-primary/5 mt-auto flex h-40 items-center justify-center rounded-2xl border">
        <div className="bg-primary/20 text-primary flex size-16 rotate-45 items-center justify-center rounded-2xl">
          <MapPin className="size-8 -rotate-45" />
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
