import {
  FacebookAuthProvider,
  GithubAuthProvider,
  GoogleAuthProvider,
} from "firebase/auth";

import { ProviderType } from "../types/auth.types";

export const getProvider = (type: ProviderType) => {
  switch (type) {
    case "google": {
      const provider = new GoogleAuthProvider();
      provider.setCustomParameters({ prompt: "select_account" });
      return provider;
    }
    case "github": {
      const provider = new GithubAuthProvider();
      provider.setCustomParameters({ prompt: "select_account" });
      return provider;
    }
    case "facebook": {
      const provider = new FacebookAuthProvider();
      provider.setCustomParameters({ prompt: "select_account" });
      return provider;
    }
    default:
      throw new Error("Unknown provider");
  }
};

export const providerCredentialMap = {
  google: GoogleAuthProvider,
  github: GithubAuthProvider,
  facebook: FacebookAuthProvider,
};
