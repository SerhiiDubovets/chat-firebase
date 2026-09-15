import { useChatStore } from "@features/chat/store/chatStore";
import { useUserOptionsStore } from "@features/user/store/userOptionsStore";
import { useUserStore } from "@features/user/store/userStore";

import { auth } from "@shared/lib/firebase";

export const UserOptions = () => {
  const { resetChat } = useChatStore();
  const { resetUser } = useUserStore();
  const { closeUserOptions } = useUserOptionsStore();
  const handleLogout = () => {
    auth.signOut();
    resetChat();
    resetUser();
    closeUserOptions();
  };
  return (
    <div>
      <button className="blockUser logoutBtn" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};
