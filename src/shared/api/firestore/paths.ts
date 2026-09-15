export const paths = {
  chats: "chats",
  chat: (chatId: string) => `${paths.chats}/${chatId}`,

  messages: (chatId: string) => `${paths.chat(chatId)}/messages`,
  message: (chatId: string, messageId: string) =>
    `${paths.messages(chatId)}/${messageId}`,

  users: "users",
  user: (id: string) => `${paths.users}/${id}`,

  drafts: (userId: string) => `${paths.user(userId)}/drafts`,
  draft: (userId: string, chatId: string) =>
    `${paths.drafts(userId)}/${chatId}`,

  members: (chatId: string) => `${paths.chat(chatId)}/members`,
  member: (chatId: string, userId: string) =>
    `${paths.members(chatId)}/${userId}`,
};
