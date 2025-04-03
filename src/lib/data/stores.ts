import { observable } from "@legendapp/state";
import { ChatType, MessageType } from "./types";

type ChatStoreType = {
  activeChat: ChatType | null;
  activeMessages: MessageType[] | null;
};

const chatStore$ = observable<ChatStoreType>({
  activeChat: null,
  activeMessages: null,
});

type PromptStoreType = {
  prompt: string;
};

const promptStore$ = observable<PromptStoreType>({
  prompt: "",
});

type aiGenerationState = {
  isGenerating: boolean;
};

const aiGenerationState$ = observable<aiGenerationState>({
  isGenerating: false,
});

type titleGenerationState = {
  isGenerating: boolean;
};

const titleGenerationState$ = observable<titleGenerationState>({
  isGenerating: false,
});

export { chatStore$, promptStore$, aiGenerationState$, titleGenerationState$ };
