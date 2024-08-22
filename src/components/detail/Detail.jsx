import "./detail.css";
import { auth, db } from "../../lib/firebase";
import { useChatStore } from "../../lib/chatStore";
import { useUserStore } from "../../lib/userStore";
import { arrayRemove, arrayUnion, doc, updateDoc } from "firebase/firestore";
import { OverlayScrollbarsComponent } from "overlayscrollbars-react";

const Detail = () => {
  const {
    chatId,
    user,
    isCurrentUserBlocked,
    isReceiverUserBlocked,
    changeBlock,
  } = useChatStore();
  const { currentUser } = useUserStore();
  const handleBlock = async () => {
    if (!user) return;

    const userDocRef = doc(db, "users", currentUser.id);
    console.log(isReceiverUserBlocked);
    try {
      await updateDoc(userDocRef, {
        blocked: isReceiverUserBlocked
          ? arrayRemove(user.id)
          : arrayUnion(user.id),
      });
      changeBlock();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="detail">
      <div className="userDetail">
        <img src={user?.avatar || "./avatar.png"} alt="" />
        <h2>{user?.username}</h2>
        <p>Last seen ...</p>
      </div>
      <OverlayScrollbarsComponent>
        <div className="infoDetail">
          <div className="optionDetail">
            <div className="titleDetail">
              <span>Chat Settings</span>
              <img src="./arrowUp.png" alt="" />
            </div>
          </div>
          <div className="optionDetail">
            <div className="titleDetail">
              <span>Chat Settings</span>
              <img src="./arrowUp.png" alt="" />
            </div>
          </div>
          <div className="optionDetail">
            <div className="titleDetail">
              <span>Chat Settings</span>
              <img src="./arrowUp.png" alt="" />
            </div>
          </div>
          <div className="optionDetail">
            <div className="titleDetail">
              <span>Privacy & Help</span>
              <img src="./arrowUp.png" alt="" />
            </div>
          </div>
          <div className="optionDetail">
            <div className="titleDetail">
              <span>Shared photos</span>
              <img src="./arrowDown.png" alt="" />
            </div>
            <div className="photosDetail">
              <div className="photoItem">
                <div className="photoDetail">
                  <img src="./theme.png" alt="" />
                  <span>photo_2024_2.png</span>
                </div>
                <img className="downloadImg" src="./download.png" alt="" />
              </div>
              <div className="photoItem">
                <div className="photoDetail">
                  <img src="./theme.png" alt="" />
                  <span>photo_2024_2.png</span>
                </div>
                <img className="downloadImg" src="./download.png" alt="" />
              </div>
              <div className="photoItem">
                <div className="photoDetail">
                  <img src="./theme.png" alt="" />
                  <span>photo_2024_2.png</span>
                </div>
                <img className="downloadImg" src="./download.png" alt="" />
              </div>
              <div className="photoItem">
                <div className="photoDetail">
                  <img src="./theme.png" alt="" />
                  <span>photo_2024_2.png</span>
                </div>
                <img className="downloadImg" src="./download.png" alt="" />
              </div>
              <div className="photoItem">
                <div className="photoDetail">
                  <img src="./theme.png" alt="" />
                  <span>photo_2024_2.png</span>
                </div>
                <img className="downloadImg" src="./download.png" alt="" />
              </div>
            </div>
          </div>
          <div className="optionDetail">
            <div className="titleDetail">
              <span>Shared Files</span>
              <img src="./arrowUp.png" alt="" />
            </div>
          </div>
        </div>
      </OverlayScrollbarsComponent>
      <div className="blockBtn">
        <button className="blockUser" onClick={handleBlock}>
          {isCurrentUserBlocked
            ? "You are blocked!"
            : isReceiverUserBlocked
            ? "User blocked"
            : "Block User"}
        </button>
        <button className="blockUser logoutBtn" onClick={() => auth.signOut()}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Detail;
