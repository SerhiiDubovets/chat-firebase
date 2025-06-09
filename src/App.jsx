import { onAuthStateChanged } from "firebase/auth";
import { lazy, Suspense, useEffect } from "react";
// import Notification from "./components/notification/Notification";
// import { useChatStore } from "./lib/chatStore";
import { auth } from "./lib/firebase";
import { useUserStore } from "./lib/userStore";
import "overlayscrollbars/overlayscrollbars.css";
import { Routes, Route, Navigate } from "react-router-dom";
import ProtectedRoute from "./components/protectedRoute/ProtectedRoute";
import Home from "./pages/home/Home";
import LoadingMain from "./components/loaders/loadingMain/LoadingMain";
// import ChatPage from "./pages/chatPage/ChatPage";

const SignUpPage = lazy(() => import("./pages/signUpPage/SignUpPage"));
const SignInPage = lazy(() => import("./pages/signInPage/SignInPage"));
const ChatPage = lazy(() => import("./pages/chatPage/ChatPage"));

const App = () => {
  const { currentUser, isLoading, fetchUserInfo, userId } = useUserStore();

  useEffect(() => {
    const unSub = onAuthStateChanged(auth, (user) => {
      fetchUserInfo(user?.uid);
    });

    return () => {
      unSub();
    };
  }, [fetchUserInfo, userId]);

  if (isLoading) return <LoadingMain />;

  return (
    <Suspense fallback={<div className="loading">Loading</div>}>
      <Routes>
        <Route
          path="/"
          element={currentUser ? <Navigate to="/chat" replace /> : <Home />}
        />
        <Route
          path="/sign-in"
          element={
            currentUser ? (
              <Navigate to="/chat" replace />
            ) : (
              <Suspense fallback={<div>LOGIN</div>}>
                <SignInPage />
              </Suspense>
            )
          }
        />

        <Route
          path="/sign-up"
          element={
            currentUser ? <Navigate to="/chat" replace /> : <SignUpPage />
          }
        />

        <Route
          path="chat"
          element={
            <ProtectedRoute isAuthenticated={!!currentUser}>
              <ChatPage />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Suspense>
  );
};

export default App;
