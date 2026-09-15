// apiErrorHandler.ts
import { toastService } from "@shared/services/toastService";

export const handleApiError = (error: unknown) => {
  console.error(error);

  if (error instanceof Error) {
    toastService.error(error.message);
    return;
  }

  toastService.error("Something went wrong");
};
