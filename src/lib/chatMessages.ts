// import { doc, onSnapshot } from "firebase/firestore";
// import { db } from "./firebase";

// // useEffect(() => {
// //     if (!chatId) return;

// //     const unSub = onSnapshot(doc(db, "chats", chatId), (res) => {
// //       setChat(res.data());
// //     });

// //     return () => {
// //       unSub();
// //     };
// // }, [chatId]);

// // export const getChatMessagesById = async (chatId: string) => {
// //   const unSub = onSnapshot(doc(db, "chats", chatId), (res) => {
// //     console.log(res.data());

// //     return res.data();
// //   });
// //   return unSub;
// // };
