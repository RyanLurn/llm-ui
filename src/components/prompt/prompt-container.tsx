import { chatStore$, promptStore$ } from "@/lib/data/stores";
import { $React } from "@legendapp/state/react-web";
import { Button } from "../ui/button";
import { Send } from "lucide-react";
import { use$ } from "@legendapp/state/react";
import { createNewChat, createNewMessage } from "@/lib/data/create-new";

function PromptContainer() {
  const prompt = use$(promptStore$.prompt);
  const activeChat = use$(chatStore$.activeChat);
  function handleSend() {
    if (prompt) {
      let chatId: string;
      if (!activeChat) {
        const newChat = createNewChat();
        chatStore$.activeChat.set(newChat);
        chatId = newChat.id;
      } else {
        chatId = activeChat.id;
      }
      const newUserMessage = createNewMessage({
        role: "user",
        content: prompt,
        activeChatId: chatId,
      });

      chatStore$.activeMessages.push(newUserMessage);
      promptStore$.prompt.set("");
    }
  }
  return (
    <div className="sticky bottom-0 flex max-h-3/4 w-full flex-col gap-y-3 rounded-t-lg bg-sidebar px-3 py-2">
      <$React.textarea
        className="field-sizing-content min-h-15 resize-none focus:outline-none"
        rows="3"
        placeholder="Enter your message..."
        $value={promptStore$.prompt}
      />
      <div className="flex w-full justify-between">
        <Button>Gemini 2.5 Pro</Button>
        <Button size="icon" onClick={handleSend}>
          <Send />
        </Button>
      </div>
    </div>
  );
}

export default PromptContainer;
