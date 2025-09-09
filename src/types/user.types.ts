export interface ChatUser {
  id: string;
  blocked: boolean;
  email: string;
  username: string;
  avatar: string | null;
  phone?: string | null;
  about?: string;
}
