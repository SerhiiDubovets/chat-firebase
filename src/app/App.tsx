import React, { useEffect } from "react";

import { onAuthStateChanged } from "firebase/auth";

import { GlobalModal } from "@app/providers/modal/GlobalModal";
import { ThemeApplier } from "@app/providers/theme/themeApplier";
import { AppRouter } from "@app/router/AppRouter";

import { useUserPresence } from "@features/user/hooks/useUserPresence";
import { useUserStore } from "@features/user/store/userStore";

import { auth } from "@shared/lib/firebase";

const App: React.FC = () => {
  const { loadUser } = useUserStore();

  // useEffect(() => {
  //   return onAuthStateChanged(auth, (user) => {
  //     loadUser(user?.uid ?? null);

  //     if (user) {
  //       presenceApi.setOnline(user.uid);
  //     }
  //   });
  // }, [loadUser]);

  useEffect(() => {
    return onAuthStateChanged(auth, (user) => {
      loadUser(user?.uid ?? null);
    });
  }, [loadUser]);

  useUserPresence();

  return (
    <>
      <ThemeApplier />
      <AppRouter />
      <GlobalModal />
    </>
  );
};

export default App;
