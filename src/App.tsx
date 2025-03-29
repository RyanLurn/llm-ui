import { ThemeProvider } from "@/components/theme/theme-provider";
import { ModeToggle } from "./components/theme/mode-toggle";
import ChatContainer from "./components/chat/chat-container";
import Layout from "./layout";
import { SidebarTrigger } from "./components/ui/sidebar";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Layout>
        <div className="h-full w-full overflow-y-auto">
          <SidebarTrigger className="top-0 left-0" />
          <ChatContainer />
          <div className="fixed top-0 right-2">
            <ModeToggle />
          </div>
        </div>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
