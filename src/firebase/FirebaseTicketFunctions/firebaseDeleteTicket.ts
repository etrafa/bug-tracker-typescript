//this function will delete ticket from database.

import {
  collectionGroup,
  deleteDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { db } from "../firebaseConfig";

export const firebeaseDeleteTicket = async (
  ticketID: string,
  isEditTicketOpen: React.Dispatch<React.SetStateAction<boolean>>
) => {
  const colRef = collectionGroup(db, "tickets");

  const q = query(colRef, where("id", "==", ticketID));

  const res = await getDocs(q); //catch the ticket by its ID and delete it.

  try {
    if (res) {
      res.docs.forEach(async (item) => {
        await deleteDoc(item.ref);
      });
    }
    isEditTicketOpen(false); //close modal
  } catch (err) {
    console.log(err);
    isEditTicketOpen(false); //close modal
  }
};
