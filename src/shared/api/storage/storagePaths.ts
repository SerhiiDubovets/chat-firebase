export const storagePaths = {
  avatar: (userId: string) => `users/${userId}/avatar/avatar.jpg`,

  chatImage: (chatId: string, imageId: string, extension: string) =>
    `chats/${chatId}/images/${imageId}.${extension}`,
};
