import { collection } from "firebase/firestore";

import { userConverter } from "@shared/api/firestore/converters/user.converter";
import { paths } from "@shared/api/firestore/paths";
import { db } from "@shared/lib/firebase";

export const getUsersCollectionRef = collection(db, paths.users).withConverter(
  userConverter,
);
