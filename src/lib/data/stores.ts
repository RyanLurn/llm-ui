import { observable } from "@legendapp/state";
import { ChatStoreType, PromptStoreType } from "./types";

const chatStore$ = observable<ChatStoreType>({
  activeChat: null,
  activeMessages: null,
});

const promptStore$ = observable<PromptStoreType>({
  prompt: "",
});

export { chatStore$, promptStore$ };
