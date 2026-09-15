const ALLOWED_IMAGE_TYPES = ["image/jpeg", "image/png", "image/webp"];

const MAX_IMAGE_SIZE = 5 * 1024 * 1024;

export const validateImage = (file: File) => {
  if (!ALLOWED_IMAGE_TYPES.includes(file.type)) {
    throw new Error("Unsupported image format");
  }

  if (file.size > MAX_IMAGE_SIZE) {
    throw new Error("Image is too large");
  }
};
