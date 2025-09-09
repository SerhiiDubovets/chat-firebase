import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";

import defaultAvatar from "@/assets/avatar.png";

import { storage } from "./firebase";

const upload = async (file: File | null): Promise<string> => {
  if (!file) {
    return defaultAvatar;
  }

  try {
    const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
    const sanitizedFileName = file.name.replace(/\s+/g, "_");
    const storagePath = `images/${timestamp}_${sanitizedFileName}`;
    const storageRef = ref(storage, storagePath);

    const uploadTask = uploadBytesResumable(storageRef, file);

    const downloadURL = await new Promise<string>((resolve, reject) => {
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        },
        (error) => {
          reject(new Error(`Upload failed: ${error.code}`));
        },
        async () => {
          try {
            const url = await getDownloadURL(uploadTask.snapshot.ref);

            resolve(url);
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
          } catch (error) {
            reject(new Error("Failed to get download URL."));
          }
        }
      );
    });

    return downloadURL;
  } catch (error: any) {
    console.error("Upload failed:", error.message);
    throw error;
  }
};

export default upload;
