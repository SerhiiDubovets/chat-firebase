import {
  AuthCredential,
  createUserWithEmailAndPassword,
  fetchSignInMethodsForEmail,
  linkWithCredential,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";

import {
  getProvider,
  providerCredentialMap,
} from "@features/auth/lib/providers";
import {
  AuthResult,
  AvatarResult,
  ProviderType,
  RegisterUserProps,
} from "@features/auth/types/auth.types";

import { usersApi } from "@shared/api/firestore/api/users.api";
import { auth } from "@shared/lib/firebase";
import { avatarService } from "@shared/services/avatar.service";

import { rollbackRegistration } from "../lib/rollbackRegistration";

export const authService = {
  async registerUser({
    email,
    password,
    username,
    avatarFile,
  }: RegisterUserProps): Promise<AuthResult> {
    let res;
    let avatar: AvatarResult | null = null;

    try {
      res = await createUserWithEmailAndPassword(auth, email, password);

      avatar = await avatarService.upload(res.user.uid, avatarFile);

      const userData = await usersApi.createIfNotExists({
        id: res.user.uid,
        username,
        email,
        avatar: avatar.url,
        avatarPath: avatar.path,
      });

      return { status: "SUCCESS", user: userData };
    } catch (error) {
      await rollbackRegistration(res?.user, avatar?.path);

      throw error;
    }
  },

  async authWithProvider(type: ProviderType): Promise<AuthResult> {
    const provider = getProvider(type);

    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      const userData = await usersApi.createIfNotExists({
        id: user.uid,
        username: user.displayName || "Unknown",
        email: user.email || "",
        avatar: user.photoURL,
        avatarPath: null,
      });

      return { status: "SUCCESS", user: userData };
    } catch (err: any) {
      if (err.code === "auth/account-exists-with-different-credential") {
        const email = err.customData?.email;

        const ProviderClass = providerCredentialMap[type];
        const pendingCredential = ProviderClass.credentialFromError(err);

        if (!email || !pendingCredential) throw err;

        const methods = await fetchSignInMethodsForEmail(auth, email);

        return {
          status: "NEED_LINK",
          email,
          methods,
          pendingCredential,
        };

        // if (methods.includes("password")) {
        //   throw {
        //     code: "auth/need-password-link",
        //     email,
        //     pendingCredential,
        //   };
        // }
      }

      throw err;
    }
  },

  async linkAccountWithPassword({
    email,
    password,
    pendingCredential,
  }: {
    email: string;
    password: string;
    pendingCredential: AuthCredential;
  }) {
    const res = await signInWithEmailAndPassword(auth, email, password);

    const user = res.user;

    await linkWithCredential(user, pendingCredential);

    return usersApi.createIfNotExists({
      id: user.uid,
      username: user.displayName || "Unknown",
      email: user.email || "",
      avatar: user.photoURL || null,
      avatarPath: null,
    });
  },

  async loginWithEmail(email: string, password: string) {
    const res = await signInWithEmailAndPassword(auth, email, password);

    const user = res.user;

    await usersApi.updateLastSeen(user.uid);

    const userData = await usersApi.getById(user.uid);

    if (!userData) {
      const err: any = new Error(
        "Account exists but profile is missing. Please sign up again.",
      );
      err.code = "user-data-missing";
      throw err;
    }

    return userData;
  },
};
// import {
//   AuthCredential,
//   createUserWithEmailAndPassword,
//   fetchSignInMethodsForEmail,
//   linkWithCredential,
//   signInWithEmailAndPassword,
//   signInWithPopup,
// } from "firebase/auth";

// import {
//   getProvider,
//   providerCredentialMap,
// } from "@features/auth/lib/providers";
// import {
//   AuthResult,
//   ProviderType,
//   RegisterUserProps,
// } from "@features/auth/types/auth.types";

// import { usersApi } from "@shared/api/firestore/users.api";
// import { auth } from "@shared/lib/firebase";
// import { deleteFile } from "@shared/lib/deleteFile";
// import { uploadFile } from "@shared/lib/uploadFile";

// export const authService = {
//   async registerUser({
//     email,
//     password,
//     username,
//     avatarFile,
//   }: RegisterUserProps): Promise<AuthResult> {
//     const avatar = avatarFile ? await uploadFile(avatarFile) : null;

//     let res;
//      let avatarPath: string | null = null;
//   let avatarUrl: string | null = null;

//     try {
//       res = await createUserWithEmailAndPassword(auth, email, password);

//       const userData = await usersApi.createIfNotExists({
//         id: res.user.uid,
//         username,
//         email,
//         avatar,
//       });

//       return { status: "SUCCESS", user: userData };
//     } catch (error) {
//       try {
//         await res?.user.delete();
//       } catch (e) {
//         console.warn("Failed to rollback user", e);
//       }

//       throw error;
//     }
//   },

//   async authWithProvider(type: ProviderType): Promise<AuthResult> {
//     const provider = getProvider(type);

//     try {
//       const result = await signInWithPopup(auth, provider);
//       const user = result.user;

//       const userData = await usersApi.createIfNotExists({
//         id: user.uid,
//         username: user.displayName || "Unknown",
//         email: user.email || "",
//         avatar: user.photoURL,
//       });

//       return { status: "SUCCESS", user: userData };
//     } catch (err: any) {
//       if (err.code === "auth/account-exists-with-different-credential") {
//         const email = err.customData?.email;

//         const ProviderClass = providerCredentialMap[type];
//         const pendingCredential = ProviderClass.credentialFromError(err);

//         if (!email || !pendingCredential) throw err;

//         const methods = await fetchSignInMethodsForEmail(auth, email);

//         return {
//           status: "NEED_LINK",
//           email,
//           methods,
//           pendingCredential,
//         };

//         // if (methods.includes("password")) {
//         //   throw {
//         //     code: "auth/need-password-link",
//         //     email,
//         //     pendingCredential,
//         //   };
//         // }
//       }

//       throw err;
//     }
//   },

//   async linkAccountWithPassword({
//     email,
//     password,
//     pendingCredential,
//   }: {
//     email: string;
//     password: string;
//     pendingCredential: AuthCredential;
//   }) {
//     const res = await signInWithEmailAndPassword(auth, email, password);

//     const user = res.user;

//     await linkWithCredential(user, pendingCredential);

//     return usersApi.createIfNotExists({
//       id: user.uid,
//       username: user.displayName || "Unknown",
//       email: user.email || "",
//       avatar: user.photoURL || null,
//     });
//   },

//   async loginWithEmail(email: string, password: string) {
//     const res = await signInWithEmailAndPassword(auth, email, password);

//     const user = res.user;

//     await usersApi.updateLastSeen(user.uid);

//     const userData = await usersApi.getById(user.uid);

//     if (!userData) {
//       const err: any = new Error(
//         "Account exists but profile is missing. Please sign up again.",
//       );
//       err.code = "user-data-missing";
//       throw err;
//     }

//     return userData;
//   },
// };
