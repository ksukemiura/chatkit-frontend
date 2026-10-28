import { ChatKit, useChatKit } from "@openai/chatkit-react";

export default function App() {
  const chatkit = useChatKit({
    api: {
      url: import.meta.env.VITE_CHATKIT_API_URL || "http://localhost:8000/chatkit",
      domainKey: import.meta.env.VITE_CHATKIT_DOMAIN_KEY || "local-dev",
    },
  });

  return (
    <ChatKit
      control={chatkit.control}
      style={{ display: "block", width: "100%", height: "100svh" }}
    />
  );
}
