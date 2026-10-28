import { ChatKit, useChatKit } from "@openai/chatkit-react";

export default function App() {
  const chatkit = useChatKit({
    api: {
      url: "http://localhost:8000/chatkit",
      domainKey: "local-dev",
    },
  });

  return (
    <ChatKit
      control={chatkit.control}
      style={{ display: "block", width: "100%", height: "100svh" }}
    />
  );
}
