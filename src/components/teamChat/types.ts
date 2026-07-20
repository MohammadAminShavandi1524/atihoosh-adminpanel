export interface ChatUser {
  id: string;
  name: string;
  role: string;
  avatar?: string;
  initials: string;
  avatarTextColor?: string;
}

export interface ChatMessageType {
  id: string;
  user: ChatUser;
  message: string;
  time: string;
  isCurrentUser: boolean;
}
