import { MessageCircle, Send, X } from "lucide-react";
import { useState } from "react";

interface Message {
  sender: "user" | "bot";
  text: string;
}

export default function ChatAssistant() {
  const [isOpen, setIsOpen] = useState(false);

  const [messages, setMessages] = useState<Message[]>([
    {
      sender: "bot",
      text: "👋 Welcome to AgriDevcor. How can I help you today?",
    },
  ]);

  const [input, setInput] = useState("");

  const getBotResponse = (question: string) => {
    const q = question.toLowerCase();

    if (q.includes("popcorn")) {
      return "AgriDevcor works with farmers to grow popcorn for local consumption and export while guaranteeing market access.";
    }

    if (q.includes("services")) {
      return "We provide agricultural development, farmer support, training, project implementation and market linkage services.";
    }

    if (q.includes("contact")) {
      return "You can contact AgriDevcor through our Contact page, email, or phone numbers listed on the website.";
    }

    if (q.includes("projects")) {
      return "We implement sustainable agriculture and agribusiness development projects across different farming communities.";
    }

    return "Thank you for your question. Our team will be happy to provide more detailed information.";
  };

  const sendMessage = () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      sender: "user",
      text: input,
    };

    const botMessage: Message = {
      sender: "bot",
      text: getBotResponse(input),
    };

    setMessages((prev) => [...prev, userMessage, botMessage]);
    setInput("");
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-[9999] flex h-16 w-16 items-center justify-center rounded-full bg-green-600 text-white shadow-xl transition hover:scale-110"
      >
        {isOpen ? <X size={28} /> : <MessageCircle size={28} />}
      </button>

      {isOpen && (
        <div className="fixed bottom-24 right-6 z-[9999] flex h-[550px] w-[380px] flex-col overflow-hidden rounded-2xl border bg-white shadow-2xl">
          <div className="bg-green-600 p-4 text-white">
            <h3 className="font-bold">AgriDevcor Assistant</h3>
            <p className="text-sm opacity-90">
              Ask anything about our services.
            </p>
          </div>

          <div className="flex-1 overflow-y-auto p-4">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`mb-3 max-w-[80%] rounded-xl px-4 py-3 text-sm ${
                  msg.sender === "user"
                    ? "ml-auto bg-green-600 text-white"
                    : "bg-gray-100 text-gray-800"
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>

          <div className="flex border-t">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              placeholder="Type your question..."
              className="flex-1 px-4 py-3 outline-none"
            />

            <button
              onClick={sendMessage}
              className="px-4 text-green-600"
            >
              <Send size={20} />
            </button>
          </div>
        </div>
      )}
    </>
  );
}