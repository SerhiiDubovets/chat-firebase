import { Suspense } from "react";

import { LoadingSkeletonSignIn } from "@/components/signIn/loadingSkeletonSignIn/LoadingSkeletonSignIn";
import SignIn from "@/components/signIn/SignIn";

const SignInPage = () => {
  return (
    <Suspense fallback={<LoadingSkeletonSignIn />}>
      <SignIn />;
    </Suspense>
  );
};

export default SignInPage;
