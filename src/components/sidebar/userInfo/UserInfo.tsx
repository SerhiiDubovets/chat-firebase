import AvatarIcon from "@assets/avatar.png";
import { useState } from "react";

import { Avatar } from "@/components/avatar/Avatar";
import { ButtonIcon } from "@/components/buttons/buttonIcon/ButtonIcon";
import AddUser from "@/components/sidebar/chatList/addUser/AddUser";
import { InfOptionsIcon, UserPlusIcon } from "@/icons/icons";
import { useUserStore } from "@/store/userStore";
import {
  BlockBtnStyle,
  UserInfoStyle,
  UserNameStyle,
  UserStyle,
} from "./userInfo.style";

const UserInfo = () => {
  const { currentUser } = useUserStore();
  const [addMode, setAddMode] = useState(false);

  const handleAddMode = () => setAddMode((prev) => !prev);

  return (
    <header aria-label="Current user info">
      <UserInfoStyle>
        <UserStyle>
          <Avatar url={currentUser?.avatar || AvatarIcon} size="2.5rem" />
          <UserNameStyle>{currentUser?.username}</UserNameStyle>
        </UserStyle>
        <BlockBtnStyle>
          <ButtonIcon
            onClick={handleAddMode}
            sizeIcon="1.25rem"
            colorIcon="#ffffff"
            aria-label="Add new user"
            title="Add new user">
            <UserPlusIcon />
          </ButtonIcon>
          <ButtonIcon
            sizeIcon="1.25rem"
            colorIcon="#ffffff"
            aria-label="More options"
            title="More options">
            <InfOptionsIcon />
          </ButtonIcon>
        </BlockBtnStyle>

        {addMode && <AddUser />}
      </UserInfoStyle>
    </header>
  );
};

export default UserInfo;
