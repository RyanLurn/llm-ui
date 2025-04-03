import { File as FileIcon } from "lucide-react";
import { Button } from "../ui/button";

function FileItem({ file }: { file: File }) {
  return (
    <Button variant="outline">
      <FileIcon />
      <span className="flex-grow truncate text-left">{file.name}</span>
    </Button>
  );
}

export default FileItem;
