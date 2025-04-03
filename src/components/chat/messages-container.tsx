import Message from "./message";
import { observer, use$ } from "@legendapp/state/react";
import { aiGenerationState$, chatStore$ } from "@/lib/data/stores";
import { MessageType } from "@/lib/data/types";

const thinkingMessage: MessageType = {
  id: "thinking",
  role: "assistant",
  content: "Thinking...",
  createdAt: "now",
  chatId: "thinking",
};

const MessagesContainer = observer(function MessagesContainer() {
  const messages = use$(chatStore$.activeMessages);
  const isGenerating = use$(aiGenerationState$.isGenerating);

  return (
    <div className="flex flex-1 flex-col gap-y-6">
      {messages?.map((message) => (
        <Message message={message} key={message.id} />
      ))}
      {isGenerating && <Message message={thinkingMessage} />}
    </div>
  );
});

export default MessagesContainer;
