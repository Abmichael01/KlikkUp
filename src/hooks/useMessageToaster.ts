import { useToast } from '@/hooks/use-toast';

interface ToasterProps {
  message: string;
  title?: string;
  type?: "success" | "error" | "info"
}

export const useMessageToaster  = () => {
  const { toast } = useToast();
  
  const toastMessage = ({ message, title }:ToasterProps) => {
    toast({
      title: title,
      description: message,
    })
  }

  return toastMessage
};
