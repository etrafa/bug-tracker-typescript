import {
  collectionGroup,
  doc,
  DocumentData,
  getDocs,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { ITicketsRoot } from "../Interfaces/Firebase-Interfaces/TicketsInterface";
import { db, useAuth } from "../firebase/firebaseConfig";

export const useGetDocsArrayQuery = (
  colName: string,
  qu: string,
  endPoint: string
) => {
  const [dbData, setDbData] = useState<ITicketsRoot[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  let PARENT_PATH: string[] = [];
  let ALL_DATA_FIRESTORE: ITicketsRoot[] = [];

  const currentUser = useAuth();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const docRef = collectionGroup(db, colName);
      const q = query(docRef, where(qu, "array-contains", endPoint));
      const querySnapShot = await getDocs(q);

      //GET THE ID OF PARENT ELEMENTS
      querySnapShot.forEach((doc) => {
        const documentRef = doc.ref;
        const parentCollectionRef = documentRef;
        PARENT_PATH.push(parentCollectionRef.path);
      });

      PARENT_PATH.forEach((path) => {
        const docRef = doc(db, path);
        onSnapshot(docRef, (item) => {
          // setDbData((prev) =>
          //   prev
          //     ? [...prev, { ...item.data(), id: item.id }]
          //     : [{ id: item.id }]
          // );
          ALL_DATA_FIRESTORE.push({ ...item.data(), id: item.id });
          setDbData(ALL_DATA_FIRESTORE);
        });
      });

      setLoading(false);
    };
    fetchData();
  }, [currentUser, colName, qu, endPoint]);
  return { dbData, loading };
};
