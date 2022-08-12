//*UPDATE EXISTING USER'S ROLE IN THE DATABASE
//* USER'S ROLE BY DEFAULT IS: "USER"

import { doc, updateDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";

export const updateUserRole = async (
  docID: string,
  role: string,
  successMessage: React.Dispatch<React.SetStateAction<boolean>>,
  errorMessage: React.Dispatch<React.SetStateAction<boolean>>
) => {
  const docRef = doc(db, "users", docID);
  try {
    //admin can change user's role
    await updateDoc(docRef, {
      role: role,
    });
    successMessage(true);
  } catch (err) {
    errorMessage(true);
  }
};
