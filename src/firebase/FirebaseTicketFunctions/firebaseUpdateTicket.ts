import {
  collectionGroup,
  getDocs,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import { ITicketsRoot } from "../../Interfaces/Firebase-Interfaces/TicketsInterface";
import { db } from "../firebaseConfig";

export const firebaseTest = async (
  ticketID: string,
  updatedTicket: ITicketsRoot
) => {
  const colRef = collectionGroup(db, "tickets");

  const q = query(colRef, where("id", "==", ticketID));

  const res = await getDocs(q);

  if (res) {
    res.docs.forEach(async (item) => {
      await updateDoc(item.ref, { ...updatedTicket });
    });
  }
};
