interface DateDividerProps {
  text: string;
}

export const DateDivider = ({ text }: DateDividerProps) => {
  return (
    <div className="my-8 flex items-center gap-4">
      <div className="h-px flex-1 bg-border" />
      <span className="text-sm text-muted-foreground">
        {text}
      </span>
      <div className="h-px flex-1 bg-border" />
    </div>
  );
};