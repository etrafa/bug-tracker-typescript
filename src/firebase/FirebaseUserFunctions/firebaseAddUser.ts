//* add user to existing project

//firebase
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebaseConfig";

//interfaces
import { IFirebaseUser } from "../../Interfaces/Firebase-Interfaces/UserInterface";

export const addUser = async (
  colName: string,
  newUser: IFirebaseUser[],
  messageVisible: React.Dispatch<React.SetStateAction<boolean>>,
  isModalOpen: React.Dispatch<React.SetStateAction<boolean>>
) => {
  const colRef = collection(db, colName);
  newUser.forEach(async (item) => {
    await addDoc(colRef, { ...item });
  });

  messageVisible(true);

  //3secs later close the modal
  setTimeout(() => {
    isModalOpen(false);
  }, 3000);
};
