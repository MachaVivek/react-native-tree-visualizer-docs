import { useState } from "react";
import { FiCheck, FiCopy } from "react-icons/fi";

const CopyableCommand = ({ command }: { command: string }) => {
    const [copied, setCopied] = useState(false);
  
    const handleCopy = () => {
      navigator.clipboard.writeText(command);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    };
  
    return (
      <div className="relative bg-gray-900 text-gray-200 p-4 rounded mb-6 overflow-x-auto flex flex-col sm:flex-row items-start sm:items-start justify-between">
        <pre className="whitespace-pre-wrap select-all w-full overflow-x-auto">
          <code>{command}</code>
        </pre>
        <button
          onClick={handleCopy}
          className="mt-2 sm:mt-0 sm:ml-4 p-2 rounded hover:bg-gray-800 transition"
        >
          {copied ? <FiCheck className="text-green-400" /> : <FiCopy />}
        </button>
      </div>
    );
  };
  
  export default CopyableCommand;