import { fakeDb } from "@/lib/data/fake-db";
import Message from "./message";

export default function MessagesContainer() {
  return (
    <div className="flex flex-1 flex-col gap-y-6">
      {fakeDb.messages.map((message) => (
        <Message message={message} key={message.id} />
      ))}
    </div>
  );
}
