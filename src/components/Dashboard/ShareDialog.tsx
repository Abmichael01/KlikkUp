import React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { FaFacebook, FaTwitter, FaWhatsapp, FaTelegram } from "react-icons/fa";
import { useShareDialogStore } from "@/stores/useShareDialogStore";

const ShareDialog: React.FC = () => {
  const { isOpen, textToShare, closeDialog } = useShareDialogStore();

  const socialLinks = [
    {
      name: "Facebook",
      icon: <FaFacebook className="h-6 w-6 text-blue-900" />,
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(textToShare)}`,
    },
    {
      name: "Twitter",
      icon: <FaTwitter className="h-6 w-6 text-blue-900" />,
      url: `https://twitter.com/intent/tweet?url=${encodeURIComponent(textToShare)}`,
    },
    {
      name: "WhatsApp",
      icon: <FaWhatsapp className="h-6 w-6 text-green-900" />,
      url: `https://wa.me/?text=${encodeURIComponent(textToShare)}`,
    },
    {
      name: "Telegram",
      icon: <FaTelegram className="h-6 w-6 text-blue-900" />,
      url: `https://t.me/share/url?url=${encodeURIComponent(textToShare)}`,
    },
  ];

  return (
    <Dialog open={isOpen} onOpenChange={closeDialog}>
      <DialogContent className="rounded-lg shadow-lg">
        <DialogHeader>
          <DialogTitle className="text-lg font-bold">Share Referral Link</DialogTitle>
        </DialogHeader>
        <div className="grid grid-cols-2 gap-4 mt-4">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 p-3 shadow-lg border rounded-lg hover:bg-gray-100 transition"
            >
              {social.icon}
              <span className="text-sm">{social.name}</span>
            </a>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ShareDialog;
