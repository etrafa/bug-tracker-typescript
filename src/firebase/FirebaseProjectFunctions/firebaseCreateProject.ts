//* create new project and save it to db

import { addDoc, collection } from "firebase/firestore";
import { IFirebaseUser } from "../../Interfaces/Firebase-Interfaces/UserInterface";
import { db } from "../firebaseConfig";

export const createNewProject = async (
  projectName: string,
  projectDescription: string,
  selectedUsers: IFirebaseUser[],
  modal: React.Dispatch<React.SetStateAction<boolean>>,
  successModal: React.Dispatch<React.SetStateAction<boolean>>
) => {
  try {
    const collectionRef = collection(db, "projects");
    const addDocument = await addDoc(collectionRef, {
      projectName: projectName,
      projectDescription: projectDescription,
    });

    const docRef = addDocument.id;

    const docRefs = collection(db, "projects", docRef, "users");

    selectedUsers.forEach(async (user) => {
      await addDoc(docRefs, { ...user });
      successModal(true);
    });

    //3 secs later close the project modal.
    setTimeout(() => {
      modal(false);
    }, 3000);
  } catch (err) {
    console.log(err);
  }
};
