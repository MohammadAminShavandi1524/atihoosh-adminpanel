import { cn } from "@/lib/utils";
import { ChatMessageType } from "./types";
import { ChatAvatar } from "./ChatAvatar";
import { UserBadge } from "./UserBadge";

interface ChatMessageProps {
  message: ChatMessageType;
}

export const ChatMessage = ({ message }: ChatMessageProps) => {
  const { user, isCurrentUser } = message;

  return (
    <div className={cn("flex gap-x-2.5", isCurrentUser && "flex-row-reverse")}>
      <ChatAvatar user={user} />

      <div className={cn("max-w-[50%]", isCurrentUser && "items-end")}>
        <div
          className={cn(
            "mb-2 flex items-center gap-2 text-sm",
            isCurrentUser && "justify-end",
          )}
        >
          <span>{user.name}</span>

          <UserBadge role={user.role} />

          <span className="text-muted-foreground">{message.time}</span>
        </div>

        <div
          className={cn(
            "rounded-2xl  p-5",
            isCurrentUser ? "bg-secondary rounded-tr-md" : "bg-tertiary rounded-tl-md",
          )}
        >
          {message.message}
        </div>
      </div>
    </div>
  );
};
