import Dexie, { type EntityTable } from "dexie";
import { ChatType, MessageType } from "./types";

const dexieDb = new Dexie("Test1") as Dexie & {
  messages: EntityTable<MessageType, "id">;
  chats: EntityTable<ChatType, "id">;
};

dexieDb.version(1).stores({
  messages: "id, createdAt, chatId",
  chats: "id, title, lastOpenedAt, profileId",
});

export default dexieDb;
