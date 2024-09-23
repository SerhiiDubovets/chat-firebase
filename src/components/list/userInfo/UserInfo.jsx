import { useUserStore } from "../../../lib/userStore";
import { UserInfoStyle, User, UserIcons, UserImg } from "./userInfo.style";

const UserInfo = () => {
  const { currentUser, isLoading, fetchUserInfo } = useUserStore();
  return (
    <UserInfoStyle>
      <User>
        <UserImg src={currentUser.avatar || "./avatar.png"} alt="avatar" />
        <h2>{currentUser.username}</h2>
      </User>
      <UserIcons>
        <img src="./more.png" alt="" />
        <img src="./video.png" alt="" />
        <img src="./edit.png" alt="" />
      </UserIcons>
    </UserInfoStyle>
  );
};

export default UserInfo;
