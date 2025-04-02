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

export default function ChatHistory() {
  const chats = useLiveQuery(() => dexieDb.chats.toArray());
  return (
    <SidebarGroup>
      <SidebarGroupLabel>Chat History</SidebarGroupLabel>
      <SidebarGroupAction>
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
