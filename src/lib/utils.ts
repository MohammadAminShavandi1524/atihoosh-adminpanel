import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function persianToEnglishNumber(input: string) {
  const persianNumbers = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
  const englishNumbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

  let output = "";
  for (let i = 0; i < input.length; i++) {
    const index = persianNumbers.indexOf(input[i]);
    if (index > -1) {
      output += englishNumbers[index];
    } else {
      output += input[i];
    }
  }
  return output;
}

export function englishToPersianNumber(input: string) {
  const englishNumbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  const persianNumbers = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];

  let output = "";
  for (let i = 0; i < input.length; i++) {
    const index = englishNumbers.indexOf(input[i]);
    output += index > -1 ? persianNumbers[index] : input[i];
  }

  return output;
}

export function formatDate(date: string | Date, locale: string) {
  return new Intl.DateTimeFormat(locale === "fa" ? "fa-IR" : "en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date(date));
}

export function formatPhoneNumber(phone: string, locale: string) {
  const EN_DIGITS = "0123456789";
  const FA_DIGITS = "۰۱۲۳۴۵۶۷۸۹";

  let formatted = phone.trim();

  // تبدیل +98 به 0
  if (formatted.startsWith("+98")) {
    formatted = "0" + formatted.slice(3);
  }

  // تبدیل 98 به 0 (اگر بدون + ارسال شده باشد)
  if (formatted.startsWith("98") && formatted.length === 12) {
    formatted = "0" + formatted.slice(2);
  }

  // فرمت: 0999 888 8888
  if (formatted.length === 11 && formatted.startsWith("0")) {
    formatted = formatted.replace(/^(\d{4})(\d{3})(\d{4})$/, "$1 $2 $3");
  }

  const digits = locale === "fa" ? FA_DIGITS : EN_DIGITS;

  formatted = formatted.replace(/\d/g, (digit) => digits[Number(digit)]);

  return `\u200E${formatted}`;
}
