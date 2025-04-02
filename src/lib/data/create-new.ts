import { v7 as uuidv7 } from "uuid";
import { ChatType, MessageType } from "./types";

function createNewMessage({
  role,
  content,
  name,
  activeChatId,
}: {
  role: "user" | "assistant";
  content: string;
  name: string;
  activeChatId: string;
}): MessageType {
  const newMessage: MessageType = {
    id: uuidv7(),
    role,
    content,
    name,
    createdAt: new Date().toISOString(),
    chatId: activeChatId,
  };

  return newMessage;
}

function createNewChat(): ChatType {
  const newChat: ChatType = {
    id: uuidv7(),
    title: "New Chat",
    createdAt: new Date().toISOString(),
    lastOpenedAt: new Date().toISOString(),
  };

  return newChat;
}

export { createNewMessage, createNewChat };
