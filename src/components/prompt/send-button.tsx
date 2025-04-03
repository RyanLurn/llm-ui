import { Button } from "../ui/button";
import { Loader2, Send } from "lucide-react";
import { handleSend } from "./handle-send";
import { aiGenerationState$ } from "@/lib/data/stores";
import { observer, use$ } from "@legendapp/state/react";

const SendButton = observer(function SendButton() {
  const isGenerating = use$(aiGenerationState$.isGenerating);

  return (
    <Button size="icon" onClick={handleSend} disabled={isGenerating}>
      {isGenerating ? <Loader2 className="animate-spin" /> : <Send />}
    </Button>
  );
});

export default SendButton;
