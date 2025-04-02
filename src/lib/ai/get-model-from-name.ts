import { geminiFlash, geminiPro, gemma } from "./gemini-models";

function getModelFromName(name: string) {
  switch (name) {
    case "Gemma 3 27B":
      return gemma;
    case "Gemini 2.0 Flash":
      return geminiFlash;
    case "Gemini 2.5 Pro":
      return geminiPro;
    default:
      return gemma;
  }
}

export { getModelFromName };
