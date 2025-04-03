import { promptStore$ } from "@/lib/data/stores";
import { observer, use$ } from "@legendapp/state/react";
import FileItem from "./file-item";

const FilesDisplay = observer(function FilesDisplay() {
  const uploadedFiles = use$(promptStore$.files);

  if (!uploadedFiles || uploadedFiles.length === 0) return;

  return (
    <div className="flex min-h-0 flex-wrap gap-2 overflow-y-auto">
      {uploadedFiles.map((file) => (
        // Ensure you have a unique key for each item in the list
        <FileItem file={file} key={file.name} />
      ))}
    </div>
  );
});

export default FilesDisplay;
