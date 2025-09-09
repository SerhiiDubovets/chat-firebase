import { TFile } from "@/types/types";

export const isMessageEmpty = (message: string, file: TFile) => {
  return message.trim() === "" && !file;
};
