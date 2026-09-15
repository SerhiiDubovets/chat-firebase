import { usersApi } from "@shared/api/firestore/api/users.api";

export const userService = {
  async searchUsers(searchValue: string, currentUserId: string) {
    const normalizedSearch = searchValue.toLowerCase().trim();

    const searchedUsersData = await usersApi.searchUsers(normalizedSearch);

    const searchedUsers = searchedUsersData.filter(
      (u) => u.id !== currentUserId,
    );

    return searchedUsers;
  },

  // export async function getUserById(uid: string): Promise<ChatUser | null> {
  //   try {
  //     const docRef = doc(db, "users", uid);
  //     const docSnap = await getDoc(docRef);

  //     return docSnap.exists() ? (docSnap.data() as ChatUser) : null;
  //   } catch (err) {
  //     console.error("Error fetching user:", err);
  //     return null;
  //   }
  // }
};
