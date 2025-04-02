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
import { chatStore$ } from "@/lib/data/stores";

export default function ChatHistory() {
  const chats = useLiveQuery(() => dexieDb.chats.toArray());
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
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
}
