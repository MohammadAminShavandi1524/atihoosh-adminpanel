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
    <Link className="min-h-[64px]" href={`/${locale}`}>
      <Image src="/logo.png" alt="logo" width={64} height={64} />
    </Link>
  );
};

export default Logo;
