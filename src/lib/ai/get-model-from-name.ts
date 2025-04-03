import { LanguageModel } from "ai";
import { supportedModels } from "./supported-models";

function getModelFromName(name: string): LanguageModel {
  switch (name) {
    case supportedModels.google.geminiFlash.name:
      return supportedModels.google.geminiFlash.instance;
    case supportedModels.google.geminiPro.name:
      return supportedModels.google.geminiPro.instance;
    default:
      return supportedModels.default.instance;
  }
}

export { getModelFromName };
