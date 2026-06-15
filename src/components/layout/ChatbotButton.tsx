import { MessageCircle, X } from "lucide-react";
import { useState } from "react";
import ChatAssistant from "@/components/chat/ChatAssistant";

export default function ChatbotButton() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-600 text-white shadow-lg hover:scale-105 transition"
      >
        {open ? <X size={24} /> : <MessageCircle size={24} />}
      </button>

      {open && <ChatAssistant />}
    </>
  );
}