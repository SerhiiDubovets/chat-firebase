import { doc } from "firebase/firestore";

import { paths } from "@shared/api/firestore/paths";
import { db } from "@shared/lib/firebase";

export const getUserRef = (userId: string) => doc(db, paths.user(userId));
