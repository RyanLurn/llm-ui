import { aiGenerationState$, promptStore$ } from "@/lib/data/stores";
import { $React } from "@legendapp/state/react-web";
import { Button } from "../ui/button";
import SendButton from "./send-button";
import { handleSend } from "./handle-send";
import { use$ } from "@legendapp/state/react";

function PromptContainer() {
  const isGenerating = use$(aiGenerationState$.isGenerating);

  return (
    <div className="sticky bottom-0 flex max-h-3/4 w-full flex-col gap-y-3 rounded-t-lg bg-sidebar px-3 py-2">
      <$React.textarea
        className="field-sizing-content min-h-15 resize-none focus:outline-none"
        rows="3"
        placeholder={isGenerating ? "Generating..." : "Ask a question..."}
        onKeyDown={(e: React.KeyboardEvent<HTMLTextAreaElement>) => {
          if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            handleSend();
          }
        }}
        $value={promptStore$.prompt}
        $disabled={aiGenerationState$.isGenerating}
      />
      <div className="flex w-full justify-between">
        <Button>Gemini 2.5 Pro</Button>
        <SendButton />
      </div>
    </div>
  );
}

export default PromptContainer;
