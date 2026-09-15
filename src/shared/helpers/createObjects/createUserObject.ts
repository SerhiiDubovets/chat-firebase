import { CreateUserInput } from "@features/auth/types/auth.types";
import { ChatUser } from "@features/user/types/user.types";

export const createUserObject = ({
  id,
  username,
  email,
  avatar,
  avatarPath,
}: CreateUserInput): ChatUser => ({
  id,
  username,
  email,
  avatar,
  avatarPath: avatarPath ?? null,
  username_lower: username.toLowerCase(),
  about: "",
  blocked: [],
});
