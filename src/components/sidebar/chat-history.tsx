import {
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
} from "../ui/sidebar";
import ChatItem from "./chat-item";
import { Plus } from "lucide-react";
import { useLiveQuery } from "dexie-react-hooks";
import dexieDb from "@/lib/data/dexie-db";
import { chatStore$, titleGenerationState$ } from "@/lib/data/stores";
import { use$ } from "@legendapp/state/react";
import { ChatType } from "@/lib/data/types";

const thinkingChat: ChatType = {
  id: "thinking",
  title: "Thinking...",
  createdAt: "now",
  lastOpenedAt: "now",
};

export default function ChatHistory() {
  const chats = useLiveQuery(() => dexieDb.chats.toArray());
  const isGenerating = use$(titleGenerationState$.isGenerating);

  function newChatAction() {
    chatStore$.activeChat.set(null);
    chatStore$.activeMessages.set(null);
  }

  return (
    <SidebarGroup>
      <SidebarGroupLabel>Chat History</SidebarGroupLabel>
      <SidebarGroupAction onClick={newChatAction}>
        <Plus />
      </SidebarGroupAction>
      <SidebarGroupContent>
        <SidebarMenu>
          {chats?.map((chat) => <ChatItem key={chat.id} chat={chat} />)}
          {isGenerating && <ChatItem chat={thinkingChat} />}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
}
