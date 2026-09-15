import { AuthCredential } from "firebase/auth";

import { ChatUser } from "@features/user/types/user.types";

export interface AuthFormValues {
  username: string;
  email: string;
  password: string;
  name?: any;
}

// export interface SignUpFormExtended extends AuthFormValues {
//   root?: {
//     serverError?: any;
//   };
// }

export interface RegisterUserProps {
  email: string;
  password: string;
  username: string;
  avatarFile: File | null;
}

export type AuthResult =
  | { status: "SUCCESS"; user: ChatUser }
  | {
      status: "NEED_LINK";
      email: string;
      methods: string[];
      pendingCredential: AuthCredential;
    };

export type CreateUserInput = {
  id: string;
  username: string;
  email: string;
  avatar: string | null;
  avatarPath: string | null;
};

export interface AvatarResult {
  url: string;
  path: string | null;
}

export type ProviderType = "google" | "github" | "facebook";
