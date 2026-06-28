interface UserBadgeProps {
  role: string;
}

export const UserBadge = ({ role }: UserBadgeProps) => {
  return (
    <div className="border-border-secondary rounded-md bg-tertiary text-primary border px-2 py-1 text-xs">
      {role}
    </div>
  );
};
