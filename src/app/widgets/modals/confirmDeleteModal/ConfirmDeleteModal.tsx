import { useModalStore } from "@shared/store/modalStore";

import * as S from "./confirmDeleteModal.style";

export const ConfirmDeleteModal = ({
  onConfirmEveryone,
  onConfirmMe,
}: {
  onConfirmEveryone: () => void;
  onConfirmMe: () => void;
}) => {
  const { closeModal } = useModalStore();

  return (
    <S.Wrapper>
      <S.Title>Delete message</S.Title>
      <S.SubTitle>Are you sure you want to delete this message?</S.SubTitle>

      <S.DeleteButtonEveryone
        onClick={() => {
          onConfirmEveryone();
          closeModal();
        }}>
        Delete for everyone
      </S.DeleteButtonEveryone>

      <S.DeleteButton
        onClick={() => {
          onConfirmMe();
          closeModal();
        }}>
        Delete
      </S.DeleteButton>
    </S.Wrapper>
  );
};
