import { useEffect, useState } from "react";

import { OverlayScrollbarsComponent } from "overlayscrollbars-react";

import { AddUserList } from "@features/chat/components/chatList/addUser/addUserList/AddUserList";
import { privateChatService } from "@features/chat/services/privateChat.service";
import { useChatStore } from "@features/chat/store/chatStore";
import { userService } from "@features/user/services/user.service";
import { useUserStore } from "@features/user/store/userStore";
import { ChatUser } from "@features/user/types/user.types";

import { BackIcon, SearchIcon } from "@shared/assets/icons/icons";
import { UseDebounce } from "@shared/hooks/useDebounce";
import { ButtonIcon } from "@shared/ui/buttons/buttonIcon/ButtonIcon";

import * as S from "./addUser.style";

const AddUser = () => {
  const { currentUser } = useUserStore();
  const [search, setSearch] = useState("");
  const [users, setUsers] = useState<ChatUser[]>([]);
  const { setSidebarView } = useChatStore();
  const debouncedSearch = UseDebounce(search, 300);

  useEffect(() => {
    const handleSearch = async () => {
      if (!currentUser?.id) return;

      if (!debouncedSearch.trim()) {
        setUsers([]);
        return;
      }

      const searchedUsers = await userService.searchUsers(
        debouncedSearch,
        currentUser.id,
      );

      setUsers(searchedUsers);
    };

    handleSearch();
  }, [currentUser?.id, debouncedSearch]);

  const handleBack = () => setSidebarView("chats");

  const handleCreateChat = async (selectedUser: ChatUser) => {
    // if (!user || !currentUser) return;
    if (!currentUser) return;
    const result = await privateChatService.create(currentUser, selectedUser);
    console.log(result.status);
  };

  return (
    <S.Container>
      <S.Header>
        <ButtonIcon color="hsl(0, 0%, 100%)" onClick={handleBack}>
          <BackIcon />
        </ButtonIcon>
        <S.Title>Add user</S.Title>
      </S.Header>
      <S.Form>
        <SearchIcon />
        <S.SearchInput
          type="text"
          placeholder="Search user..."
          name="username"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          aria-label="Search users"
        />
      </S.Form>
      {!debouncedSearch && (
        <S.SearchMessage>Start typing to search</S.SearchMessage>
      )}
      {debouncedSearch && users.length === 0 && (
        <S.SearchMessage>No users found</S.SearchMessage>
      )}
      {users.length > 0 && (
        <S.ListWrapper>
          <OverlayScrollbarsComponent>
            <AddUserList users={users} handleCreateChat={handleCreateChat} />
          </OverlayScrollbarsComponent>
        </S.ListWrapper>
      )}
    </S.Container>
  );
};

// export default AddUser;
// import { useEffect, useState } from "react";

// import { addUserService } from "@features/chat/services/addUserService";
// import { useUserStore } from "@features/user/store/userStore";
// import { ChatUser } from "@features/user/types/user.types";

// import { usersApi } from "@shared/api/firestore/users.api";
// import { UseDebounce } from "@shared/hooks/useDebounce";

// import {
//   AddUserBtnStyle,
//   AddUserStyle,
//   FormStyle,
//   UserDetailStyle,
//   UserStyle,
// } from "./addUser.style";

// const AddUser = () => {
//   const { currentUser } = useUserStore();
//   const [search, setSearch] = useState("");
//   const [users, setUsers] = useState<ChatUser[]>([]);
//   const debouncedSearch = UseDebounce(search, 300);

//   useEffect(() => {
//     const handleSearch = async () => {
//       if (!debouncedSearch.trim()) {
//         setUsers([]);
//         return;
//       }

//       const searchValue = debouncedSearch.toLowerCase();

//       const searchedUsers = await usersApi.searchUsers(
//         searchValue,
//         currentUser?.id,
//       );

//       setUsers(searchedUsers);
//     };
//     handleSearch();
//   }, [debouncedSearch, currentUser?.id]);

//   const handleAdd = async (selectedUser: ChatUser) => {
//     // if (!user || !currentUser) return;
//     if (!currentUser) return;
//     await addUserService(currentUser, selectedUser);
//   };

//   return (
//     <AddUserStyle>
//       <FormStyle>
//         <input
//           type="text"
//           placeholder="Search user..."
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//         />
//         <button>Search</button>
//       </FormStyle>
//       {users.length > 0 &&
//         users.map((user) => (
//           <UserStyle key={user.id}>
//             <UserDetailStyle>
//               <img src={user.avatar || "./avatar.png"} alt="" />
//               <span>{user.username}</span>
//             </UserDetailStyle>

//             <AddUserBtnStyle onClick={() => handleAdd(user)}>
//               Add User
//             </AddUserBtnStyle>
//           </UserStyle>
//         ))}
//     </AddUserStyle>
//   );
// };

// export default AddUser;
