import { ChangeEvent, useState } from "react";

import { validateAvatarFile } from "@/validators/authUser";

interface AvatarState {
  file: File | null;
  url: string;
}

export const useAvatar = () => {
  const [avatar, setAvatar] = useState<AvatarState>({ file: null, url: "" });
  const [error, setError] = useState<string>("");

  const handleAvatarChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (!file) return;

    const validationError = validateAvatarFile(file);

    if (validationError) {
      setError(validationError);
      return;
    }

    setError("");
    setAvatar({
      file,
      url: URL.createObjectURL(file),
    });
  };

  return { avatar, error, handleAvatarChange };
};
