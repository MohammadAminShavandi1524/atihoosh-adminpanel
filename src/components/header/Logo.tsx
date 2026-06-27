"use client";

import { useLocale } from "next-intl";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

interface LogoProps {}

const Logo = ({}: LogoProps) => {
  const locale = useLocale();

  return (
    <Link className="min-h-[65px]" href={`/${locale}`}>
      <Image src="/logo.png" alt="logo" width={95} height={95} />
    </Link>
  );
};

export default Logo;
