import { FormEventHandler, ReactNode } from "react";

export type ButtonVariant = "primary" | "secondary";

export interface FormProps {
  children: ReactNode;
  onSubmit?: FormEventHandler<HTMLFormElement>;
}

export type TFile = File | null;

export type SendInputMessage = {
  text: string;
  file: TFile;
};

export type MessageImage = {
  url: string;
  path: string;
};
