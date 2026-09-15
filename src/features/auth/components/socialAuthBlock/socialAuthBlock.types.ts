import { ProviderType } from "@features/auth/types/auth.types";

export interface SocialAuthBlockProps {
  onSocialClick: (providerType: ProviderType) => void;
}
