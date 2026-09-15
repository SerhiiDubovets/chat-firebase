import { useCallback, useEffect } from "react";

import { AnimatePresence } from "framer-motion";
import { createPortal } from "react-dom";

import { CloseIcon } from "@shared/assets/icons/icons";
import { useModalStore } from "@shared/store/modalStore";

import * as S from "./globalModal.style";

export const GlobalModal = () => {
  const { isOpen, content, closeModal, options } = useModalStore();

  const { onClose } = options;

  const handleClose = useCallback(() => {
    onClose?.();
    closeModal();
  }, [onClose, closeModal]);

  useEffect(() => {
    if (!isOpen) return;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [isOpen, handleClose]);

  const mountEvent = document.getElementById("modal-root") as HTMLElement;

  if (!mountEvent) return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <S.Overlay
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="overlay-bg"
          onClick={handleClose}
          $background={options.overlayColor}>
          <S.Content
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            onClick={(e) => e.stopPropagation()}
            $background={options.backgroundColor}>
            {content}
            <S.CloseBtn onClick={handleClose} color={options.closeBtnColor}>
              <CloseIcon />
            </S.CloseBtn>
          </S.Content>
        </S.Overlay>
      )}
    </AnimatePresence>,
    mountEvent,
  );
};
