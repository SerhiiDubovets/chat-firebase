export interface ChatUser {
  id: string;
  blocked: string[];
  email: string | null;
  username: string | null;
  avatar: string | null;
  phone?: string | null;
  about?: string;
}
