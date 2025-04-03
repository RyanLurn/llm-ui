import { FolderPlus } from "lucide-react";
import { Button } from "../ui/button";
import { useRef } from "react";
import { promptStore$ } from "@/lib/data/stores";

function FileUpload() {
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Function to trigger the file input click
  const handleButtonClick = () => {
    // Use the ref to programmatically click the hidden input
    fileInputRef.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const files = event.target.files;
      promptStore$.attachedFiles.set(files);
    }
  };

  return (
    <Button size="icon" variant="outline" onClick={handleButtonClick}>
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
