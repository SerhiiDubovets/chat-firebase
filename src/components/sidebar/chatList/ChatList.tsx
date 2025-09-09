import { doc, updateDoc } from "firebase/firestore";

import { OverlayScrollbarsComponent } from "overlayscrollbars-react";
import { useEffect, useState } from "react";

import { UserList } from "@/components/sidebar/chatList/userList/UserList";
import { SearchIcon } from "@/icons/icons";
import { db } from "@/lib/firebase";
import { useChatStore } from "@/store/chatStore";
import { useUserStore } from "@/store/userStore";

import { ChatUser } from "@/types/user.types";

import {
  ChatListSearchInputStyle,
  ChatListSearchStyle,
  ChatListStyle,
  ListStyle,
  ListTitleStyle,
  UserListBlockStyle,
} from "./chatList.style";

const ChatList = () => {
  const [input, setInput] = useState<string>("");

  const { currentUser } = useUserStore();
  const { chatId, chats, changeChat, subscribeUserChats } = useChatStore();

  useEffect(() => {
    if (!currentUser) return;
    const unsubscribe = subscribeUserChats(currentUser.id);
    return unsubscribe;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentUser?.id]);

  const handleSelect = async (chatId: string, user: ChatUser) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const userChats = chats.map(({ user, ...rest }) => rest);

    if (!currentUser) return;

    const userChatsRef = doc(db, "userchats", currentUser.id);

    try {
      await updateDoc(userChatsRef, { chats: userChats });
      changeChat(chatId, user);
    } catch (err) {
      console.log(err);
    }
  };

  const filteredChats = chats.filter((c) =>
    c.user?.username?.toLowerCase().includes(input.toLowerCase())
  );

  return (
    <ChatListStyle>
      <ChatListSearchStyle>
        <ChatListSearchInputStyle
          type="text"
          placeholder="Search"
          name="search"
          onChange={(e) => setInput(e.target.value)}
        />
        <SearchIcon />
      </ChatListSearchStyle>
      <ListStyle>
        <ListTitleStyle>Messages</ListTitleStyle>
        <UserListBlockStyle>
          <OverlayScrollbarsComponent>
            <UserList
              filteredChats={filteredChats}
              handleSelect={handleSelect}
              selectedChatId={chatId}
            />
          </OverlayScrollbarsComponent>
        </UserListBlockStyle>
      </ListStyle>
    </ChatListStyle>
  );
};

export default ChatList;
