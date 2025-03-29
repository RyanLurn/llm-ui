import MessagesContainer from "./messages-container";

export default function ChatContainer() {
  return (
    <div className="mx-auto flex h-full w-full max-w-2xl flex-col">
      <MessagesContainer />
    </div>
  );
}
