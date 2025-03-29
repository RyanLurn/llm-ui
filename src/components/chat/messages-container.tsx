import { observer, use$ } from "@legendapp/state/react";
import Message from "./message";
import { chatStore$ } from "@/lib/data/stores";

const MessagesContainer = observer(function MessagesContainer() {
  const messages = use$(chatStore$.activeMessages);
  return (
    <div className="flex flex-1 flex-col gap-y-6">
      {messages?.map((message) => (
        <Message message={message} key={message.id} />
      ))}
    </div>
  );
});

export default MessagesContainer;
