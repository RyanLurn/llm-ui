import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "../ui/context-menu";
import dexieDb from "@/lib/data/dexie-db";
import { chatStore$ } from "@/lib/data/stores";
import { use$ } from "@legendapp/state/react";

function MessageContent({ id, content }: { id: string; content: string }) {
  const activeMessages = use$(chatStore$.activeMessages);
  async function deleteMessage() {
    await dexieDb.messages.delete(id);
    const targetIndex = activeMessages!.findIndex(
      (message) => message.id === id,
    );
    chatStore$.activeMessages[targetIndex].delete();
  }
  return (
    <ContextMenu>
      <ContextMenuTrigger>
        <div className="prose max-w-none break-all prose-zinc dark:prose-invert">
          <Markdown remarkPlugins={[remarkGfm]}>{content}</Markdown>
        </div>
      </ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuItem onClick={deleteMessage} variant="destructive">
          Delete
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  );
}

export default MessageContent;
