import { TFile } from "@shared/types/common.types";

export const isMessageEmpty = (message: string, file: TFile) => {
  const hasText = message.trim().length > 0;
  const hasFile = !!file;

  return !hasText && !hasFile;
};
