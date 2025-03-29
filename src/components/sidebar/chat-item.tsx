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

const ChatItem = observer(function ChatItem({ chat }: { chat: ChatType }) {
  const activeChatId = use$(chatStore$.activeChat.id);
  return (
    <SidebarMenuItem>
      <SidebarMenuButton
        isActive={activeChatId === chat.id}
        className="data-[active=true]:bg-sidebar-accent"
        onClick={() => chatStore$.activeChat.set(chat)}
      >
        <MessageSquare />
        <span>{chat.title}</span>
      </SidebarMenuButton>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <SidebarMenuAction>
            <MoreHorizontal />
          </SidebarMenuAction>
        </DropdownMenuTrigger>
        <DropdownMenuContent side="right">
          <DropdownMenuItem>
            <span>Edit</span>
          </DropdownMenuItem>
          <DropdownMenuItem variant="destructive">
            <span>Delete</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </SidebarMenuItem>
  );
});

export default ChatItem;
