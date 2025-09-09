import Chat from "@/components/chat/Chat";
import ChatSidebarDetail from "@/components/chatSidebarDetail/ChatSidebarDetail";
import { Sidebar } from "@/components/sidebar/Sidebar";
import { useChatStore } from "@/store/chatStore";
import { ChatContainer } from "./chatPage.style";

const ChatPage = () => {
  const { chatId, isDetailOpen } = useChatStore();

  return (
    <ChatContainer $isDetailOpen={isDetailOpen}>
      <Sidebar />
      <Chat />
      <ChatSidebarDetail />
      {chatId && isDetailOpen && <ChatSidebarDetail />}
    </ChatContainer>
  );
};

export default ChatPage;
