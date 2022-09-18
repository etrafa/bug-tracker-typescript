//this function will delete ticket from database.

import {
  collectionGroup,
  deleteDoc,
  doc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { db } from "../firebaseConfig";

export const firebeaseDeleteTicket = async (ticketID: string) => {
  const colRef = collectionGroup(db, "tickets");

  const q = query(colRef, where("id", "==", ticketID));

  const res = await getDocs(q);

  try {
    if (res) {
      res.docs.forEach(async (item) => {
        await deleteDoc(item.ref);
      });
    }
  } catch (err) {
    console.log(err);
  }
};
