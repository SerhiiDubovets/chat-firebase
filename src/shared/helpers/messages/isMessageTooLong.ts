const MAX_MESSAGE_LENGTH = 4000;

export const isMessageTooLong = (text: string) =>
  text.length > MAX_MESSAGE_LENGTH;
