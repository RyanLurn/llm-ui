import { Sidebar, SidebarContent } from "../ui/sidebar";
import ChatHistory from "./chat-history";
import Footer from "./footer";
import Header from "./header";

export default function AppSidebar() {
  return (
    <Sidebar>
      <Header />
      <SidebarContent>
        <ChatHistory />
      </SidebarContent>
      <Footer />
    </Sidebar>
  );
}
