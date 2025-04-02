import { MessageType } from "@/lib/data/types";
import { Button } from "../ui/button";
import { Bot, User } from "lucide-react";
import MessageContent from "./message-content";

export default function Message({ message }: { message: MessageType }) {
  return (
    <div className="flex w-full gap-x-2">
      <Button size="icon">
        {message.role === "user" ? <User /> : <Bot />}
      </Button>
      <div className="flex flex-1 flex-col gap-y-2">
        <span className="text-lg font-bold">
          {message.name ?? (message.role === "user" ? "You" : "AI")}
        </span>
        <MessageContent id={message.id} content={message.content} />
      </div>
    </div>
  );
}
