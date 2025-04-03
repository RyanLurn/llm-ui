import { aiGenerationState$, promptStore$ } from "@/lib/data/stores";
import { $React } from "@legendapp/state/react-web";
import SendButton from "./send-button";
import { handleSend } from "./handle-send";
import { For, use$ } from "@legendapp/state/react";
import ModelSelection from "./model-selection";
import FileUpload from "./file-upload";
import FileItem from "./file-item";

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
        <FileUpload />
        <div className="flex gap-x-2">
          <ModelSelection />
          <SendButton />
        </div>
      </div>
      {promptStore$.attachedFiles && (
        <div className="flex gap-x-2">
          {promptStore$.attachedFiles
            .get()
            ?.map((file: File) => <FileItem key={file.name} file={file} />)}
        </div>
      )}
    </div>
  );
}

export default PromptContainer;
