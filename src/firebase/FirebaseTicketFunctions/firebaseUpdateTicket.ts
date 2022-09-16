import {
  collectionGroup,
  getDocs,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import { ITicketsRoot } from "../../Interfaces/Firebase-Interfaces/TicketsInterface";
import { db } from "../firebaseConfig";

export const firebaseUpdateTicket = async (
  ticketID: string,
  updatedTicket: ITicketsRoot,
  showSuccessMessage: React.Dispatch<React.SetStateAction<boolean>>,
  isModalOpen: React.Dispatch<React.SetStateAction<boolean>>
) => {
  const colRef = collectionGroup(db, "tickets");

  const q = query(colRef, where("id", "==", ticketID));

  const res = await getDocs(q);

  try {
    if (res) {
      res.docs.forEach(async (item) => {
        await updateDoc(item.ref, { ...updatedTicket });
      });
    }

    //if success show message
    showSuccessMessage(true);

    //3 secs later close the edit ticket modal.
    setTimeout(() => {
      isModalOpen(false);
    }, 3000);
  } catch (err) {
    console.log(err);
  }
};
