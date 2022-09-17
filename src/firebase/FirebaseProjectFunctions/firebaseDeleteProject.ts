import {
  collection,
  deleteDoc,
  doc,
  DocumentData,
  getDocs,
  QueryDocumentSnapshot,
} from "firebase/firestore";
import { db } from "../firebaseConfig";

//delete project from database.
export const firebaseDeleteProject = async (projectID: string) => {
  const projectRef = doc(db, "projects", projectID); //this is the main project collection.
  const commentsRef = collection(db, "projects", projectID, "comments"); //this is reference for comments subcollection
  const ticketsRef = collection(db, "projects", projectID, "tickets"); //this is reference for tickets subcollection
  const usersRef = collection(db, "projects", projectID, "users"); //this is reference for users subcollection

  try {
    const commentsData = await getDocs(commentsRef); //get all comments from selected project
    const ticketsData = await getDocs(ticketsRef); //get all tickets from selected project
    const usersData = await getDocs(usersRef); //get all users from selected project

    //* 1.delete subcollections in order (comments, tickets, users)
    commentsData.docs.forEach((item: QueryDocumentSnapshot<DocumentData>) =>
      deleteDoc(item.ref)
    );
    ticketsData.docs.forEach((item: QueryDocumentSnapshot<DocumentData>) =>
      deleteDoc(item.ref)
    );
    usersData.docs.forEach((item: QueryDocumentSnapshot<DocumentData>) =>
      deleteDoc(item.ref)
    );

    //* delete main collection (project + selectedProjectID)
    await deleteDoc(projectRef);
  } catch (err) {
    console.log(err);
  }
};
