import { useEffect } from "react";
import { createPortal } from "react-dom";

import { CloseIcon } from "@/icons/icons";
import { useModalStore } from "@/store/modalStore";

import {
  ButtonCloseStyle,
  ContentStyle,
  OverlayStyle,
} from "./globalModal.style";

export const GlobalModal = () => {
  const { isOpen, content, closeModal } = useModalStore();

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [isOpen, closeModal]);

  const mountEvent = document.getElementById("modal-root") as HTMLElement;

  if (!isOpen || !mountEvent) return;

  const handleCloseModal = () => {
    closeModal();
  };

  return createPortal(
    <OverlayStyle>
      <div>
        <ContentStyle onClick={(e) => e.stopPropagation()}>
          {content}
          <ButtonCloseStyle onClick={handleCloseModal} type="button">
            <CloseIcon />
          </ButtonCloseStyle>
        </ContentStyle>
      </div>
    </OverlayStyle>,
    mountEvent
  );
};
