import { FolderPlus } from "lucide-react";
import { Button } from "../ui/button";
import { useRef } from "react";
import { promptStore$ } from "@/lib/data/stores";

function FileUpload() {
  const fileInputRef = useRef<HTMLInputElement>(null);

  async function handleFileChange(event: React.ChangeEvent<HTMLInputElement>) {
    if (event.target.files && event.target.files.length > 0) {
      const uploadedFiles = Array.from(event.target.files);
      if (promptStore$.files.get()) {
        promptStore$.files.push(...uploadedFiles);
      } else {
        promptStore$.files.set(uploadedFiles);
      }
    }
  }

  return (
    <Button
      size="icon"
      variant="outline"
      onClick={() => fileInputRef.current?.click()}
    >
      <input
        type="file"
        multiple
        className="hidden"
        ref={fileInputRef}
        onChange={handleFileChange}
      />
      <FolderPlus />
    </Button>
  );
}

export default FileUpload;
