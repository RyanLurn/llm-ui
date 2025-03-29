import PromptContainer from "../prompt/prompt-container";
import MessagesContainer from "./messages-container";

export default function ChatContainer() {
  return (
    <div className="mx-auto flex h-full w-full max-w-2xl flex-col gap-y-9">
      <MessagesContainer />
      <PromptContainer />
    </div>
  );
}
