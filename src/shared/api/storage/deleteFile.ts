import {
  deleteObject,
  ref,
} from "firebase/storage";

import { storage } from "@shared/lib/firebase";


export const deleteFile = async (
  path: string,
) => {
  try {
    const storageRef = ref(
      storage,
      path,
    );

    await deleteObject(storageRef);

  } catch (error) {
    console.warn(
      "Failed to delete file:",
      error,
    );
  }
};