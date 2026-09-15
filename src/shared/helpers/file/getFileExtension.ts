export const getFileExtension = (file: File) => {
  return file.name.split(".").pop()?.toLowerCase() ?? "jpg";
};
