type MessageType = {
  id: string;
  role: "user" | "assistant";
  content: string;
  name?: string;
  createdAt: string;
  chatId: string;
};

type ChatType = {
  id: string;
  title: string;
  createdAt: string;
  lastOpenedAt: string;
};

type FakeDbType = {
  chats: ChatType[];
  messages: MessageType[];
};

type ChatStoreType = {
  activeChat: ChatType | null;
  activeMessages: MessageType[] | null;
};

type PromptStoreType = {
  prompt: string;
};

export type {
  MessageType,
  ChatType,
  FakeDbType,
  ChatStoreType,
  PromptStoreType,
};
