import { generateText, LanguageModel } from "ai";
import { AiErrorLogType, AiResponseLogType, MessageType } from "../data/types";
import dexieDb from "../data/dexie-db";
import { v7 as uuidv7 } from "uuid";
import { getModelFromName } from "./get-model-from-name";

async function getResponse({
  modelName,
  system,
  messages,
}: {
  modelName: string;
  system: string;
  messages: MessageType[];
}) {
  const model: LanguageModel = getModelFromName(modelName);
  try {
    const { text, usage } = await generateText({
      model,
      system,
      messages,
    });
    const responseLog: AiResponseLogType = {
      id: uuidv7(),
      input: { modelName, system, messages },
      output: { text, usage },
      createdAt: new Date().toISOString(),
    };
    await dexieDb.aiResponseLogs.add(responseLog);
    console.log(responseLog);
    return text;
  } catch (error) {
    const errorMessage = String(error);
    const errorLog: AiErrorLogType = {
      id: uuidv7(),
      input: { modelName, system, messages },
      error: errorMessage,
      createdAt: new Date().toISOString(),
    };
    await dexieDb.aiErrorLogs.add(errorLog);
    console.error(errorLog);
    return errorMessage;
  }
}

export { getResponse };
