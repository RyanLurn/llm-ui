import { MessageSquare, MoreHorizontal } from "lucide-react";
import {
  SidebarMenuAction,
  SidebarMenuButton,
  SidebarMenuItem,
} from "../ui/sidebar";
import { ChatType } from "@/lib/data/types";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { observer, use$ } from "@legendapp/state/react";
import { chatStore$ } from "@/lib/data/stores";
import dexieDb from "@/lib/data/dexie-db";

const ChatItem = observer(function ChatItem({ chat }: { chat: ChatType }) {
  const activeChatId = use$(chatStore$.activeChat.id);

  async function handleClick() {
    chatStore$.activeChat.set(chat);
    const messages = await dexieDb.messages
      .where({ chatId: chat.id })
      .toArray();
    chatStore$.activeMessages.set(messages);
  }

  async function deleteChat() {
    if (activeChatId === chat.id) {
      chatStore$.activeChat.set(null);
      chatStore$.activeMessages.set(null);
    }
    await dexieDb.chats.delete(chat.id);
    await dexieDb.messages.where({ chatId: chat.id }).delete();
  }

  return (
    <SidebarMenuItem>
      <SidebarMenuButton
        isActive={activeChatId === chat.id}
        className="data-[active=true]:bg-sidebar-accent"
        onClick={handleClick}
      >
        <MessageSquare />
        <span>{chat.title}</span>
      </SidebarMenuButton>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <SidebarMenuAction className="hover:peer-data-[active=true]/menu-button:bg-sidebar">
            <MoreHorizontal />
          </SidebarMenuAction>
        </DropdownMenuTrigger>
        <DropdownMenuContent side="right">
          <DropdownMenuItem>
            <span>Edit</span>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={deleteChat} variant="destructive">
            <span>Delete</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </SidebarMenuItem>
  );
});

export default ChatItem;
