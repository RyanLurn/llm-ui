import { observable } from "@legendapp/state";
import { ChatStoreType, MessageType, PromptStoreType } from "./types";
import { fakeDb } from "./fake-db";

const chatStore$ = observable<ChatStoreType>({
  activeChat: null,
  activeMessages: (): MessageType[] | null => {
    const activeChatId = chatStore$.activeChat.id.get();
    if (activeChatId) {
      return fakeDb.messages.filter(
        (message) => message.chatId === activeChatId,
      );
    } else {
      return null;
    }
  },
});

const promptStore$ = observable<PromptStoreType>({
  prompt: "",
});

export { chatStore$, promptStore$ };
