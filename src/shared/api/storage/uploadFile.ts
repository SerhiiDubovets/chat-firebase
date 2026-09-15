import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";

import { storage } from "@shared/lib/firebase";

interface UploadResult {
  url: string;
  path: string;
}

export const uploadFile = async (
  file: File,
  path: string,
): Promise<UploadResult> => {
  const storageRef = ref(storage, path);

  const uploadTask = uploadBytesResumable(storageRef, file);

  const url = await new Promise<string>((resolve, reject) => {
    uploadTask.on(
      "state_changed",
      () => {},
      (error) => {
        reject(error);
      },
      async () => {
        try {
          const downloadURL = await getDownloadURL(storageRef);

          resolve(downloadURL);
        } catch (error) {
          reject(error);
        }
      },
    );
  });

  return {
    url,
    path,
  };
};
