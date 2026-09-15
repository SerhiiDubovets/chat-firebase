import React from "react";

import { create } from "zustand";

interface ModalOptions {
  overlayColor?: string;
  backgroundColor?: string;
  closeBtnColor?: string;
  onClose?: () => void;
}

interface ModalState {
  isOpen: boolean;
  content: React.ReactNode | null;
  options: ModalOptions;
  openModal: (content: React.ReactNode, options?: ModalOptions) => void;
  closeModal: () => void;
}

export const useModalStore = create<ModalState>((set) => ({
  isOpen: false,
  content: null,
  options: {},
  openModal: (content, options = {}) => set({ isOpen: true, content, options }),
  closeModal: () => set({ isOpen: false, content: null, options: {} }),
}));
