import { Suspense, lazy } from "react";

import { Navigate, Route, Routes } from "react-router-dom";

import { routes } from "@app/providers/router/routes";

import Home from "@pages/home/Home";

import { SignInSkeleton } from "@features/auth/components/signIn/SignInSkeleton/SignInSkeleton";
import { SignUpSkeleton } from "@features/auth/components/signUp/SignUpSkeleton/SignUpSkeleton";
import Chat from "@features/chat/components/chat/Chat";
import { EmptyChat } from "@features/chat/components/emptyChat/EmptyChat";
import { useUserStore } from "@features/user/store/userStore";

import { LayoutLogin } from "@shared/layout/layoutLogin/LayoutLogin";
import ProtectedRoute from "@shared/layout/protectedRoute/ProtectedRoute";
import LoadingMain from "@shared/ui/loadingMain/LoadingMain";

const SignUpPage = lazy(() => import("@pages/signUpPage/SignUpPage"));
const SignInPage = lazy(() => import("@pages/signInPage/SignInPage"));
const ChatPage = lazy(() => import("@pages/chatPage/ChatPage"));

export const AppRouter = () => {
  const { currentUser } = useUserStore();
  // const newUser = useNewChatUser();

  return (
    <Suspense fallback={<LoadingMain />}>
      <Routes>
        <Route
          path={routes.home}
          element={
            currentUser ? <Navigate to={routes.chat} replace /> : <Home />
          }
        />

        <Route element={<LayoutLogin />}>
          <Route
            path={routes.signIn}
            element={
              currentUser ? (
                <Navigate to={routes.chat} replace />
              ) : (
                <Suspense fallback={<SignInSkeleton />}>
                  <SignInPage />
                </Suspense>
              )
            }
          />

          <Route
            path={routes.signUp}
            element={
              currentUser ? (
                <Navigate to={routes.chat} replace />
              ) : (
                <Suspense fallback={<SignUpSkeleton />}>
                  <SignUpPage />
                </Suspense>
              )
            }
          />
        </Route>

        <Route
          path={routes.chat}
          element={
            <ProtectedRoute isAuthenticated={!!currentUser}>
              <ChatPage />
            </ProtectedRoute>
          }>
          <Route index element={<EmptyChat />} />
          <Route path="new/:userId" element={<Chat />} />
          <Route path=":chatId" element={<Chat />} />
        </Route>

        <Route path="*" element={<Navigate to={routes.home} replace />} />
      </Routes>
    </Suspense>
  );
};
