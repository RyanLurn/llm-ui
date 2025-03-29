import { Bot } from "lucide-react";
import { SidebarHeader } from "../ui/sidebar";

export default function Header() {
  return (
    <SidebarHeader>
      <div className="flex gap-x-2">
        <Bot /> <span>LLM UI</span>
      </div>
    </SidebarHeader>
  );
}
