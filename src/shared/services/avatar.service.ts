import { AvatarResult } from "@features/auth/types/auth.types";

import { storagePaths } from "@shared/api/storage/storagePaths";
import { uploadFile } from "@shared/api/storage/uploadFile";
import defaultAvatar from "@shared/assets/images/avatar.png";
import { validateImage } from "@shared/helpers/file/validateImage";

export const avatarService = {
  async upload(userId: string, file: File | null): Promise<AvatarResult> {
    if (!file) {
      return {
        url: defaultAvatar,
        path: null,
      };
    }

    validateImage(file);

    const path = storagePaths.avatar(userId);

    return uploadFile(file, path);
  },
};
