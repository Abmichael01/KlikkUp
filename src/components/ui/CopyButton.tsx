import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Copy } from "lucide-react";
import { toast } from "@/hooks/use-toast";

interface CopyButtonProps {
  textToCopy: string;
  children?: React.ReactNode;
  className?: string;
}

const CopyButton: React.FC<CopyButtonProps> = ({ textToCopy, children, className }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    toast({
      title: "Copied to clipboard",
    });
    setTimeout(() => setCopied(false), 6000);
  };

  return (
    <Button onClick={handleCopy} className={className}>
      {children || (
        <>
          <Copy className="h-4 w-4 mr-2" />
          {copied ? "Copied" : "Copy"}
        </>
      )}
    </Button>
  );
};

export default CopyButton;
