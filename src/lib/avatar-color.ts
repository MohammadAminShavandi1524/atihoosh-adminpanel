const avatarColors = [
  "bg-emerald-600",
  "bg-blue-600",
  "bg-violet-600",
  "bg-rose-600",
  "bg-amber-500",
  "bg-cyan-600",
  "bg-indigo-600",
  "bg-fuchsia-600",
  "bg-orange-600",
  "bg-teal-600",
] as const;

export function getAvatarColor(name: string) {
  if (!name) {
    return avatarColors[0];
  }

  const hash = name
    .split("")
    .reduce((sum, char) => sum + char.charCodeAt(0), 0);

  return avatarColors[hash % avatarColors.length];
}
