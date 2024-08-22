import { useState } from "react";
import { useChatStore } from "../../../lib/chatStore";
import { useUserStore } from "../../../lib/userStore";
import EmojiPicker from "emoji-picker-react";
import "./sendMessage.css";
import upload from "../../../lib/upload";
import { arrayUnion, doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../../../lib/firebase";

const SendMessage = () => {
  const [openEmoji, setOpenEmoji] = useState(false);
  const [text, setText] = useState("");
  //   const [img, setImg] = useState({
  //     file: null,
  //     url: "",
  //   });

  const {
    chatId,
    user,
    img,
    changeImg,
    isCurrentUserBlocked,
    isReceiverUserBlocked,
  } = useChatStore();
  const { currentUser } = useUserStore();

  const handleOpenEmoji = () => setOpenEmoji((prev) => !prev);

  const handleEmoji = (e) => {
    setText((prev) => prev + e.emoji);
    setOpenEmoji(false);
  };

  const handleImg = (e) => {
    if (e.target.files[0]) {
      changeImg({
        file: e.target.files[0],
        url: URL.createObjectURL(e.target.files[0]),
      });
    }
  };

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSend = async () => {
    if (text === "") return;
    let imgUrl = null;

    try {
      if (img.file) {
        imgUrl = await upload(img.file);
      }

      await updateDoc(doc(db, "chats", chatId), {
        messages: arrayUnion({
          senderId: currentUser.id,
          text,
          createdAt: new Date(),
          ...(imgUrl && { img: imgUrl }),
        }),
      });

      const userIds = [currentUser.id, user.id];

      userIds.forEach(async (id) => {
        const userChatsRef = doc(db, "userchats", id);
        const userChatsSnapshot = await getDoc(userChatsRef);

        if (userChatsSnapshot.exists()) {
          const userChatsData = userChatsSnapshot.data();

          const chatIndex = userChatsData.chats.findIndex(
            (c) => c.chatId === chatId
          );

          userChatsData.chats[chatIndex].lastMessage = text;
          userChatsData.chats[chatIndex].isSeen =
            id === currentUser.id ? true : false;
          userChatsData.chats[chatIndex].updateAt = Date.now();

          await updateDoc(userChatsRef, {
            chats: userChatsData.chats,
          });
        }
      });
    } catch (err) {
      console.log(err);
    }

    changeImg({
      file: null,
      url: "",
    });

    setText("");
  };

  return (
    <div className="bottom">
      <div className="iconsBottom">
        <label htmlFor="file">
          <img src="./img.png" alt="" />
        </label>
        <input
          type="file"
          id="file"
          style={{ display: "none" }}
          onChange={handleImg}
        />
        <img src="./camera.png" alt="" />
        <img src="./mic.png" alt="" />
      </div>
      <input
        className="inputMessage"
        type="text"
        placeholder="Type a message..."
        value={text}
        onChange={handleChange}
        disabled={isCurrentUserBlocked || isReceiverUserBlocked}
      />
      <div className="emoji">
        <img src="./emoji.png" alt="" onClick={handleOpenEmoji} />
        <div className="picker">
          <EmojiPicker open={openEmoji} onEmojiClick={handleEmoji} />
        </div>
      </div>
      <button
        className="sendButton"
        onClick={handleSend}
        disabled={isCurrentUserBlocked || isReceiverUserBlocked}>
        Send
      </button>
    </div>
  );
};

export default SendMessage;
