// import { useUserOptionsStore } from "@features/user/store/userOptionsStore";
// import { useUserStore } from "@features/user/store/userStore";

// import { InfOptionsIcon } from "@shared/assets/icons/icons";
// import { Avatar } from "@shared/ui/avatar/Avatar";
// import { ButtonIcon } from "@shared/ui/buttonIcon/ButtonIcon";

// import * as S from "./userInfo.style";

// export const UserInfo = () => {
//   const { currentUser } = useUserStore();
//   const { openUserOptions, isOpen, closeUserOptions } = useUserOptionsStore();
//   // const { setSidebarView } = useChatStore();

//   // const handleAddMode = () => setSidebarView("addChat");
//   const handleOpenOptions = () => {
//     if (!isOpen) {
//       openUserOptions();
//       return;
//     }
//     closeUserOptions();
//   };

//   return (
//     <S.Header aria-label="Current user info">
//       {/* <S.UserInfo> */}
//       <S.User>
//         <Avatar url={currentUser?.avatar} size="2.5rem" />
//         <S.UserName>{currentUser?.username}</S.UserName>
//       </S.User>
//       <S.BtnWrap>
//         {/* <ButtonIcon
//             onClick={handleAddMode}
//             sizeIcon="1.25rem"
//             color="#ffffff"
//             aria-label="Add new user"
//             title="Add new user">
//             <UserPlusIcon />
//           </ButtonIcon> */}
//         <ButtonIcon
//           onClick={handleOpenOptions}
//           sizeIcon="1.25rem"
//           color="#ffffff"
//           aria-label="More options"
//           title="More options">
//           <InfOptionsIcon />
//         </ButtonIcon>
//       </S.BtnWrap>
//       {/* </S.UserInfo> */}
//     </S.Header>
//   );
// };
