export interface ChatUser {
  id: string;
  blocked: string[];
  email: string | null;
  username: string;
  username_lower: string;
  avatar: string | null;
  avatarPath: string | null;
  phone?: string | null;
  about?: string;
  lastSeen?: number;
}

export interface CreateUserInput {
  id: string;
  username: string;
  email: string | null;
  avatar: string | null;
}
