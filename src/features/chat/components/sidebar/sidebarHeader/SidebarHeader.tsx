import { useSettingsStore } from "@features/settingsPanel/store/settingsStore";
import { useUserOptionsStore } from "@features/user/store/userOptionsStore";
import { useUserStore } from "@features/user/store/userStore";

import { InfOptionsIcon } from "@shared/assets/icons/icons";
import { Avatar } from "@shared/ui/avatar/Avatar";
import { ButtonIcon } from "@shared/ui/buttons/buttonIcon/ButtonIcon";

import * as S from "./sidebarHeader.style";

export const SidebarHeader = () => {
  const { currentUser } = useUserStore();
  const { openUserOptions, isOpen, closeUserOptions } = useUserOptionsStore();
  const { setSidebarView } = useSettingsStore();
  const handleOpenOptions = () => {
    setSidebarView("settings");
    // if (!isOpen) {
    //   openUserOptions();
    //   return;
    // }
    // closeUserOptions();
  };

  return (
    <S.Header aria-label="Current user info">
      <S.UserInfo>
        <Avatar url={currentUser?.avatar} size="md" alt="Current user avatar" />
        <S.UserName title={currentUser?.username}>
          {currentUser?.username}
        </S.UserName>
      </S.UserInfo>
      <ButtonIcon
        onClick={handleOpenOptions}
        size="md"
        aria-label="More options"
        title="More options">
        <InfOptionsIcon />
      </ButtonIcon>
    </S.Header>
  );
};
