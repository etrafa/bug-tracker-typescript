//*UPDATE EXISTING TICKET IN FIREBASE

import {
  collection,
  getDocs,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import { db } from "../firebaseConfig";

export const updateTicket = async (
  ticketDescription: string,
  updatedTicket: {},
  successMessage: React.Dispatch<React.SetStateAction<boolean>>,
  isModalOpen: React.Dispatch<React.SetStateAction<boolean>>
) => {
  //find selected ticket in the database
  try {
    const colRef = collection(db, "projects");
    const res = await getDocs(colRef);
    res.forEach(async (item) => {
      const qRef = collection(db, "projects", item.ref.id, "tickets");
      const q = query(
        colRef,
        where("ticketDescription", "==", ticketDescription)
      );
      const result = await getDocs(q);
      //after finding the ticket, change the ticket with new value(s)
      result.docs.forEach(async (data) => {
        await updateDoc(data.ref, updatedTicket);
      });
    });
    //open the modal
    successMessage(true);

    //close the modal after 3s later
    setTimeout(() => {
      isModalOpen(false);
    }, 3000);
  } catch (err) {
    console.log(err);
  }
};
