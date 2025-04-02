import { generateText } from "ai";
import titleGeneratorSystemPrompt from "./prompts/title-generator.md?raw";
import sillyBotSystemPrompt from "./prompts/silly-bot.md?raw";
import { geminiFlash } from "./gemini-models";

async function getTitle(firstMessageContent: string) {
  const prompt = `<Assistant's system prompt>
${sillyBotSystemPrompt}
</Assistant's system prompt>

<User's first message>
${firstMessageContent}
</User's first message>`;
  const { text } = await generateText({
    model: geminiFlash,
    system: titleGeneratorSystemPrompt,
    prompt,
  });
  return text;
}

export { getTitle };
