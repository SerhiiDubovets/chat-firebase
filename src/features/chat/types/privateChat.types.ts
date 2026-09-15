export type PrivateChatResult =
  | { status: "created"; chatId: string }
  | { status: "updated"; chatId: string }
  | { status: "exists"; chatId: string }
  | { status: "error"; message: string };
