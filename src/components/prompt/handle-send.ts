import { chatStore$, promptStore$ } from "@/lib/data/stores";
import { createNewChat, createNewMessage } from "@/lib/data/create-new";
import dexieDb from "@/lib/data/dexie-db";
import { getResponse } from "@/lib/ai/get-response";

async function handleSend() {
  const prompt = promptStore$.prompt.get();
  const activeChat = chatStore$.activeChat.get();

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
      name: "Human",
      activeChatId: chatId,
    });
    await dexieDb.messages.add(newUserMessage);
    chatStore$.activeMessages.push(newUserMessage);
    promptStore$.prompt.set("");

    const aiResponse = await getResponse({
      modelName: "Gemini 2.0 Flash",
      system: "You are a silly robot",
      messages: chatStore$.activeMessages.get()!,
    });
    const newAssistantMessage = createNewMessage({
      role: "assistant",
      content: aiResponse,
      name: "Silly Bot",
      activeChatId: chatId,
    });
    await dexieDb.messages.add(newAssistantMessage);
    chatStore$.activeMessages.push(newAssistantMessage);
  }
}

export { handleSend };
