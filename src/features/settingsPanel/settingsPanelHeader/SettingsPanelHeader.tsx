import { useSettingsStore } from "@features/settingsPanel/store/settingsStore";
import { useUserStore } from "@features/user/store/userStore";

import { InfOptionsIcon } from "@shared/assets/icons/icons";
import { ButtonIcon } from "@shared/ui/buttons";

import * as S from "./SettingsPanelHeader.style";

export const SettingsPanelHeader = () => {
  const { setSidebarView } = useSettingsStore();
  const { currentUser } = useUserStore();

  const handleOpenOptions = () => {
    setSidebarView("settings");
  };

  return (
    <S.Header aria-label="Settings">
      SettingsPanelHeader{" "}
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
