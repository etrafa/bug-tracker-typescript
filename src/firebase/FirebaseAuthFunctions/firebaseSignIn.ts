import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseConfig";

//*LOGIN WITH EMAIL
export const firebaseSignIn = async (email: string, password: string) => {
  await signInWithEmailAndPassword(auth, email, password);
};
