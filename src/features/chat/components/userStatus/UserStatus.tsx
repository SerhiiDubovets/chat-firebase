import { useUserStatus } from "@features/user/hooks/useUserStatus";

import { formatUserStatus } from "@shared/helpers/formatUserStatus";
import { Status } from "@shared/ui/status/Status";

import { UserStatusProps } from "./userStatus.types";

export const UserStatus = ({ user }: UserStatusProps) => {
  const status = useUserStatus(user?.id ?? null);

  const userStatus = formatUserStatus(status);
  return <Status status={userStatus} />;
};
