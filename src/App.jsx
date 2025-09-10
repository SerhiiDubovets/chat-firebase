import { onAuthStateChanged } from "firebase/auth";
import { lazy, Suspense, useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { LayoutLogin } from "./components/layoutLogin/LayoutLogin";
import LoadingMain from "./components/loaders/loadingMain/LoadingMain";
import { GlobalModal } from "./components/modal/GlobalModal";
import ProtectedRoute from "./components/protectedRoute/ProtectedRoute";
import { LoadingSkeletonSignIn } from "./components/signIn/loadingSkeletonSignIn/LoadingSkeletonSignIn";
import { LoadingSkeletonSignUp } from "./components/signUp/loadingSkeletonSignUp/LoadingSkeletonSignUp";
import { auth } from "./lib/firebase";
import Home from "./pages/home/Home";

import "overlayscrollbars/overlayscrollbars.css";
import "react-toastify/dist/ReactToastify.css";
import { useUserStore } from "./store/userStore";

const SignUpPage = lazy(() => import("./pages/signUpPage/SignUpPage"));
const SignInPage = lazy(() => import("./pages/signInPage/SignInPage"));
const ChatPage = lazy(() => import("./pages/chatPage/ChatPage"));

const App = () => {
  const { currentUser, isLoading, userLoading, fetchUserInfo } = useUserStore();

  useEffect(() => {
    const unSub = onAuthStateChanged(auth, (user) => {
      fetchUserInfo(user ? user?.uid : null);
    });

    return () => {
      unSub();
    };
  }, [fetchUserInfo]);
  if (isLoading || userLoading) return <LoadingMain />;
  return (
    <>
      <ToastContainer position="bottom-right" />
      <Suspense fallback={<LoadingMain />}>
        <Routes>
          <Route
            path="/"
            element={currentUser ? <Navigate to="/chat" replace /> : <Home />}
          />
          <Route element={<LayoutLogin />}>
            <Route
              path="/sign-in"
              element={
                currentUser ? (
                  <Navigate to="/chat" replace />
                ) : (
                  <Suspense fallback={<LoadingSkeletonSignIn />}>
                    <SignInPage />
                  </Suspense>
                )
              }
            />

            <Route
              path="/sign-up"
              element={
                currentUser ? (
                  <Navigate to="/chat" replace />
                ) : (
                  <Suspense fallback={<LoadingSkeletonSignUp />}>
                    <SignUpPage />
                  </Suspense>
                )
              }
            />
          </Route>

          <Route
            path="/chat"
            element={
              <ProtectedRoute isAuthenticated={!!currentUser}>
                <ChatPage />
              </ProtectedRoute>
            }
          />
        </Routes>
        <GlobalModal />
      </Suspense>
    </>
  );
};

export default App;
