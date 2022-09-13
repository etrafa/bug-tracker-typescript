import {
  addDoc,
  collection,
  getDocs,
  query,
  serverTimestamp,
  where,
} from "firebase/firestore";
import { db } from "../firebaseConfig";

export const firebaseAddTicketComment = async (
  docID: string,
  comment: string,
  commentOwner: string,
  showSuccessMessage: React.Dispatch<React.SetStateAction<boolean>>,
  isModalOpen: React.Dispatch<React.SetStateAction<boolean>>
) => {
  const colRef = collection(db, "projects");
  const res = await getDocs(colRef);
  res.docs.map(async (item) => {
    const colRef = collection(db, "projects", item.ref.id, "tickets");
    const q = query(colRef, where("id", "==", docID));

    const result = await getDocs(q);

    result.docs.map(async (item) => {
      const childPath = item.ref;
      const parentPath = childPath.parent;
      const grandParentPath = parentPath.parent?.path;

      if (grandParentPath) {
        const collectionReference = collection(db, grandParentPath, "comments");
        try {
          await addDoc(collectionReference, {
            comment: comment,
            commentOwner: commentOwner,
            createdAt: serverTimestamp(),
            belongedTicketID: docID,
          });
          showSuccessMessage(true); //if true show success message on modal.
          //3 secs later close the modal.
          setTimeout(() => {
            isModalOpen(false);
          }, 3000);
        } catch (err) {
          console.log(err);
        }
      }
    });
  });
};
