import { ThemeProvider } from "@/components/theme/theme-provider";
import { ModeToggle } from "./components/theme/mode-toggle";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="fixed top-0 right-0">
        <ModeToggle />
      </div>
    </ThemeProvider>
  );
}

export default App;
