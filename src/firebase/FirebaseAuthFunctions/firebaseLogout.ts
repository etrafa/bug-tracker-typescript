//*LOGOUT FROM SERVER
import { signOut } from "firebase/auth";
import { auth } from "../firebaseConfig";

export const firebaseLogout = async () => {
  await signOut(auth);
};
