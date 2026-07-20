
import { ChatInput } from "./ChatInput";
import ChatMessages from "./ChatMessages";
import { ChatMessageType } from "./types";

interface TeamChatProps {
  messages: ChatMessageType[];
}

const TeamChat = ({ messages }: TeamChatProps) => {
  return (
    <div className=" flex w-full flex-col ">
      <ChatMessages  messages={messages} />

      <ChatInput />
    </div>
  );
};

export default TeamChat;
