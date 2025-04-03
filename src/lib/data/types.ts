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

type FileType = {
  id: string;
  name: string;
  size: number;
  mimeType: string;
  file: File;
  uploadedAt: string;
  messageId: string;
};

export type {
  MessageType,
  ChatType,
  FakeDbType,
  AiResponseLogType,
  AiErrorLogType,
  FileType,
};
