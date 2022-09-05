//firebase
import { db } from "../firebaseConfig";
import {
  arrayRemove,
  collection,
  deleteDoc,
  doc,
  getDocs,
  query,
  updateDoc,
  where,
} from "firebase/firestore";

//interfaces
import { IFirebaseUser } from "../../Interfaces/Firebase-Interfaces/UserInterface";

export const removeUser = async (colName: string, user: IFirebaseUser) => {
  //* 1.remove user from selected project
  if (user.id) {
    const docRef = doc(db, user.id);
    await deleteDoc(docRef);
  }

  //* 2.remove user's ticket from selected project
  const colRefQuery = collection(db, colName, "tickets");
  const q = query(
    colRefQuery,
    where("userEmails", "array-contains", user?.email)
  );
  const res = await getDocs(q);

  res.docs.forEach(async (doc) => {
    const docRef = doc.ref;
    try {
      await updateDoc(docRef, {
        userEmails: arrayRemove(user?.email),
        assignedUsers: arrayRemove({
          email: user?.email,
          fullName: user?.fullName,
          id: user?.id,
          role: user?.role,
          tickets: [],
        }),
      });
    } catch (err) {
      console.log(err);
    }
  });
};
