import Chat from "@/components/chat/Chat";
import Detail from "@/components/detail/Detail";
import List from "@/components/list/List";
import { useChatStore } from "@/lib/chatStore";

const ChatPage = () => {
  const { chatId } = useChatStore();
  return (
    <>
      <List />
      {chatId && <Chat />}
      {chatId && <Detail />}
    </>
  );
};

export default ChatPage;
