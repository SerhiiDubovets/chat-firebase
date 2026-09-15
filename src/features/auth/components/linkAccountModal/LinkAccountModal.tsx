import { AuthCredential } from "firebase/auth";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

import { authService } from "@features/auth/services/auth.service";
import { useUserStore } from "@features/user/store/userStore";

import { useModalStore } from "@shared/store/modalStore";
import { ServerErrorMessage } from "@shared/ui/errors/serverErrorMessage/ServerErrorMessage";

type Props = {
  email: string;
  pendingCredential: AuthCredential;
};

export const LinkAccountModal = ({ email, pendingCredential }: Props) => {
  const { closeModal } = useModalStore();
  const { setCurrentUser } = useUserStore();

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<{ password: string }>();

  const onSubmit = async (data: { password: string }) => {
    try {
      const user = await authService.linkAccountWithPassword({
        email,
        password: data.password,
        pendingCredential,
      });

      setCurrentUser(user);

      toast.success("Accounts successfully linked!");
      closeModal();
    } catch (err: any) {
      setError("root.serverError", {
        type: err.code,
        message: "Wrong password",
      });
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h3>Link accounts</h3>

      <p>
        This email already exists: <b>{email}</b>
      </p>

      <input
        type="password"
        placeholder="Enter your password"
        {...register("password", { required: true })}
      />

      <ServerErrorMessage errors={errors} />

      <button type="submit">Confirm</button>
    </form>
  );
};
