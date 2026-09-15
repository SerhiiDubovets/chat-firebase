import { User } from "firebase/auth";

import { deleteFile } from "@shared/api/storage/deleteFile";

export const rollbackRegistration = async (
  user?: User,
  avatarPath?: string | null,
) => {
  if (avatarPath) {
    await deleteFile(avatarPath);
  }

  try {
    await user?.delete();
  } catch (e) {
    console.warn("Failed to rollback user", e);
  }
};
