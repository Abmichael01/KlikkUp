import { useState } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

interface AlertProps {
  title: string;
  description: string;
  type?: "info" | "confirm";
  onConfirm?: () => void;
  trigger: React.ReactNode;
  confirmText?: string;
}

export const Alert = ({ title, description, type = "info", onConfirm, trigger, confirmText = "Continue" }: AlertProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
      <AlertDialogTrigger onClick={() => setIsOpen(true)} className="w-full">{trigger}</AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{title}</AlertDialogTitle>
          <AlertDialogDescription>{description}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          {type === "confirm" ? (
            <>
              <AlertDialogCancel onClick={() => setIsOpen(false)}>Cancel</AlertDialogCancel>
              <AlertDialogAction
                onClick={() => {
                  onConfirm?.();
                  setIsOpen(false);
                }}
              >
                {confirmText}
              </AlertDialogAction>
            </>
          ) : (
            <AlertDialogAction onClick={() => setIsOpen(false)}>OK</AlertDialogAction>
          )}
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
