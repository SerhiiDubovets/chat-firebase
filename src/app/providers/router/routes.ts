export const routes = {
  home: "/",
  signIn: "/sign-in",
  signUp: "/sign-up",
  chat: "/chat",

  chatById: (chatId: string) => `/chat/${chatId}`,
  newChat: (userId: string) => `/chat/new/${userId}`,
} as const;
