import { chatStore$, promptStore$ } from "@/lib/data/stores";
import { Button } from "../ui/button";
import { Send } from "lucide-react";
import { use$ } from "@legendapp/state/react";
import { createNewChat, createNewMessage } from "@/lib/data/create-new";
import dexieDb from "@/lib/data/dexie-db";

function SendButton() {
  const prompt = use$(promptStore$.prompt);
  const activeChat = use$(chatStore$.activeChat);
  async function handleSend() {
    if (prompt) {
      let chatId: string;
      if (!activeChat) {
        const newChat = createNewChat();
        await dexieDb.chats.add(newChat);
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
      await dexieDb.messages.add(newUserMessage);
      chatStore$.activeMessages.push(newUserMessage);
      promptStore$.prompt.set("");

      const newAssistantMessage = createNewMessage({
        role: "assistant",
        content: `You said: ${newUserMessage.content}`,
        activeChatId: chatId,
      });
      await dexieDb.messages.add(newAssistantMessage);
      chatStore$.activeMessages.push(newAssistantMessage);
    }
  }
  return (
    <Button size="icon" onClick={handleSend}>
      <Send />
    </Button>
  );
}

export default SendButton;
