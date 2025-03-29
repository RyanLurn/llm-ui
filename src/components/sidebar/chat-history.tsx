import { fakeDb } from "@/lib/data/fake-db";
import {
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
} from "../ui/sidebar";
import ChatItem from "./chat-item";
import { Plus } from "lucide-react";

export default function ChatHistory() {
  return (
    <SidebarGroup>
      <SidebarGroupLabel>Chat History</SidebarGroupLabel>
      <SidebarGroupAction>
        <Plus />
      </SidebarGroupAction>
      <SidebarGroupContent>
        <SidebarMenu>
          {fakeDb.chats.map((chat) => (
            <ChatItem key={chat.id} chat={chat} />
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
}
