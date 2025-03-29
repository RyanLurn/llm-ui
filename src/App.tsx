import { ThemeProvider } from "@/components/theme/theme-provider";
import { ModeToggle } from "./components/theme/mode-toggle";
import ChatContainer from "./components/chat/chat-container";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="fixed top-0 right-2">
        <ModeToggle />
      </div>
      <div className="h-screen w-screen overflow-y-auto">
        <ChatContainer />
      </div>
    </ThemeProvider>
  );
}

export default App;
