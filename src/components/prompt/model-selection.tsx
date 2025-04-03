import { supportedModels } from "@/lib/ai/supported-models";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { observer, use$ } from "@legendapp/state/react";
import { aiGenerationState$, selectedModel$ } from "@/lib/data/stores";

const ModelSelection = observer(function ModelSelection() {
  const isGenerating = use$(aiGenerationState$.isGenerating);
  const selectedModelName = use$(selectedModel$.name);

  return (
    <Select
      value={selectedModelName}
      onValueChange={(value) => selectedModel$.name.set(value)}
      disabled={isGenerating}
    >
      <SelectTrigger>
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Google</SelectLabel>
          <SelectItem value={supportedModels.google.geminiFlash.name}>
            {supportedModels.google.geminiFlash.name}
          </SelectItem>
          <SelectItem value={supportedModels.google.geminiPro.name}>
            {supportedModels.google.geminiPro.name}
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
});

export default ModelSelection;
