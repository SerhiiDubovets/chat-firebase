import { storagePaths } from "@shared/api/storage/storagePaths";
import { uploadFile } from "@shared/api/storage/uploadFile";
import { getFileExtension } from "@shared/helpers/file/getFileExtension";
import { validateImage } from "@shared/helpers/file/validateImage";

export const messageImageService = {
  async upload(chatId: string, file: File) {
    validateImage(file);

    const imageId = crypto.randomUUID();

    const extension = getFileExtension(file);

    const path = storagePaths.chatImage(chatId, imageId, extension);

    return uploadFile(file, path);
  },
};
