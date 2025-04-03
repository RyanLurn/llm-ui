import {
  aiGenerationState$,
  chatStore$,
  promptStore$,
  titleGenerationState$,
} from "@/lib/data/stores";
import { createNewChat, createNewMessage } from "@/lib/data/create-new";
import dexieDb from "@/lib/data/dexie-db";
import { getResponse } from "@/lib/ai/get-response";
import { getTitle } from "@/lib/ai/get-title";
import sillyBotSystemPrompt from "@/lib/ai/prompts/silly-bot.md?raw";

async function handleSend() {
  const prompt = promptStore$.prompt.get();
  const activeChat = chatStore$.activeChat.get();

  if (prompt) {
    let chatId: string;
    if (!activeChat) {
      titleGenerationState$.isGenerating.set(true);
      const newChatTitle = await getTitle(prompt);
      const newChat = createNewChat(newChatTitle);
      await dexieDb.chats.add(newChat);
      chatStore$.activeChat.set(newChat);
      titleGenerationState$.isGenerating.set(false);
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
    promptStore$.prompt.set("");
    await dexieDb.messages.add(newUserMessage);
    chatStore$.activeMessages.push(newUserMessage);

    aiGenerationState$.isGenerating.set(true);
    const aiResponse = await getResponse({
      modelName: "Gemini 2.0 Flash",
      system: sillyBotSystemPrompt,
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
    aiGenerationState$.isGenerating.set(false);
  }
}

export { handleSend };
