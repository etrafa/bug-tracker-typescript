//* READ FIRESTORE DATABASE WITH QUERY

import {
  collectionGroup,
  doc,
  getDocs,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { db, useAuth } from "../firebase/firebaseConfig";
import { IProject } from "../Interfaces/Firebase-Interfaces/ProjectInterface";
import { ITicketsRoot } from "../Interfaces/Firebase-Interfaces/TicketsInterface";
import { IFirebaseUser } from "../Interfaces/Firebase-Interfaces/UserInterface";

type UseGetDocsTypesArray = IFirebaseUser[] | IProject[] | null;
type UseGetDocsTypeSingle = IFirebaseUser | IProject | ITicketsRoot | null;

export const useGetDocsWithQuery = (
  colName: string,
  qu: string,
  endPoint: string
) => {
  const [dbData, setDbData] = useState<UseGetDocsTypesArray>(null);
  const [singleData, setSingleData] = useState<UseGetDocsTypeSingle>(null);
  const [loading, setLoading] = useState(false);
  let GRAND_PARENT_PATH: string[] = [];
  let ALL_DATA_FIRESTORE: IFirebaseUser[] | IProject[] = [];
  const currentUser = useAuth();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const docRef = collectionGroup(db, colName);
      const q = query(docRef, where(qu, "==", endPoint));
      const querySnapShot = await getDocs(q);
      //GET THE ID OF PARENT ELEMENTS
      querySnapShot.forEach((doc) => {
        if (doc.exists()) {
          setSingleData(doc.data());
          const documentRef = doc.ref;
          const parentCollectionRef = documentRef.parent;
          const grandParentDocumentRef = parentCollectionRef.parent;
          if (grandParentDocumentRef) {
            GRAND_PARENT_PATH.push(grandParentDocumentRef.id);
          }
        }
      });

      GRAND_PARENT_PATH.forEach(async (id) => {
        const documentRef = doc(db, "projects", id);
        onSnapshot(documentRef, (item) =>
          setDbData((prev) =>
            prev ? [...prev, { ...item.data(), id: item.id }] : null
          )
        );
      });

      setDbData(ALL_DATA_FIRESTORE);
      setLoading(false);
    };
    fetchData();
  }, [currentUser, colName, qu, endPoint]);
  return { dbData, loading, singleData };
};
