import Dexie, { type EntityTable } from "dexie";
import {
  AiErrorLogType,
  AiResponseLogType,
  ChatType,
  MessageType,
} from "./types";

const dexieDb = new Dexie("Test5") as Dexie & {
  messages: EntityTable<MessageType, "id">;
  chats: EntityTable<ChatType, "id">;
  aiResponseLogs: EntityTable<AiResponseLogType, "id">;
  aiErrorLogs: EntityTable<AiErrorLogType, "id">;
};

dexieDb.version(1).stores({
  messages: "id, createdAt, chatId",
  chats: "id, title, lastOpenedAt, profileId",
  aiResponseLogs: "id, input, output",
  aiErrorLogs: "id, input, error",
});

export default dexieDb;
