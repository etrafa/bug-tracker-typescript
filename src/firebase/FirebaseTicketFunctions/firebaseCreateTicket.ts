//*CREATE A NEW TICKET AND STORE IT IN DATABASE

import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";

export const createTicket = async (
  docID: string,
  ticket: {}
  // modal: React.Dispatch<React.SetStateAction<boolean>>,
  // closeModal: React.Dispatch<React.SetStateAction<boolean>>
) => {
  try {
    const colRef = collection(db, "projects", docID, "tickets");
    const addedDoc = await addDoc(colRef, {
      ...ticket,
    });
    const refID = addedDoc.id; //get the id of added document
    const docRef = doc(db, "projects", docID, "tickets", refID);
    await updateDoc(docRef, { id: refID }); //add id field to the document

    //*open information modal
    // modal(true);

    //* close information modal after 2s later
    // setTimeout(() => {
    //   closeModal(false);
    // }, 2000);
  } catch (err) {
    console.log(err);
  }
};
