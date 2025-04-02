import { Button } from "../ui/button";
import { Send } from "lucide-react";
import { handleSend } from "./handle-send";

function SendButton() {
  return (
    <Button size="icon" onClick={handleSend}>
      <Send />
    </Button>
  );
}

export default SendButton;
