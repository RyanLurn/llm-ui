import { observable } from "@legendapp/state";
import { ChatType, MessageType } from "./types";
import { supportedModels } from "../ai/supported-models";
import { LanguageModel } from "ai";
import { getModelFromName } from "../ai/get-model-from-name";

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

type SelectedModelType = {
  name: string;
  instance: LanguageModel;
};

const selectedModel$ = observable<SelectedModelType>({
  name: supportedModels.default.name,
  instance: () => getModelFromName(selectedModel$.name.get()),
});

export {
  chatStore$,
  promptStore$,
  aiGenerationState$,
  titleGenerationState$,
  selectedModel$,
};
