import { ScrollArea } from "../ui/scroll-area";
import { ChatMessage } from "./ChatMessage";
import { DateDivider } from "./DateDivider";

import { ChatMessageType } from "./types";

interface ChatMessagesProps {
  messages: ChatMessageType[];
}

const ChatMessages = ({ messages }: ChatMessagesProps) => {
  return (
    <ScrollArea className="h-[675px] px-8 py-6">
      <div dir="ltr">
        <DateDivider text="Today — Jun 21, 2025" />

        <div className="mt-8 space-y-8">
          {messages.map((message) => (
            <ChatMessage key={message.id} message={message} />
          ))}
        </div>
      </div>
    </ScrollArea>
  );
};

export default ChatMessages;
