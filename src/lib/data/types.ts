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

type AiResponseLogType = {
  id: string;
  input: {
    modelName: string;
    system: string;
    messages: MessageType[];
  };
  output: {
    text: string;
    usage: {
      promptTokens: number;
      completionTokens: number;
      totalTokens: number;
    };
  };
  createdAt: string;
};

type AiErrorLogType = {
  id: string;
  input: {
    modelName: string;
    system: string;
    messages: MessageType[];
  };
  error: string;
  createdAt: string;
};

export type {
  MessageType,
  ChatType,
  FakeDbType,
  ChatStoreType,
  PromptStoreType,
  AiResponseLogType,
  AiErrorLogType,
};
