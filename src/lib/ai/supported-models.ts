import { geminiFlash, geminiPro } from "./gemini-models";

const supportedModels = {
  default: {
    name: "Gemini 2.5 Pro",
    instance: geminiPro,
  },
  google: {
    geminiFlash: {
      name: "Gemini 2.0 Flash",
      instance: geminiFlash,
    },
    geminiPro: {
      name: "Gemini 2.5 Pro",
      instance: geminiPro,
    },
  },
};

export { supportedModels };
