import { ChatUser } from "./types";

interface ChatAvatarProps {
  user: ChatUser;
}

export const ChatAvatar = ({ user }: ChatAvatarProps) => {
  return (
    <div
      className="flex mt-1 h-12 w-12 items-center justify-center rounded-full text-base font-semibold"
      style={{
        backgroundColor: `${user.avatarTextColor}80`, // 50% opacity
        color: user.avatarTextColor,
      }}
    >
      {user.initials}
    </div>
  );
};
