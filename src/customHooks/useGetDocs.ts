//*READ FIRESTORE DATABASE

import { collection, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db, useAuth } from "../firebase/firebaseConfig";
import { IFirebaseUser } from "../Interfaces/Firebase-Interfaces/UserInterface";

export const useGetDocs = (colName: string) => {
  const [dbData, setDbData] = useState<IFirebaseUser[] | null>(null);
  const [loading, setLoading] = useState(false);
  const currentUser = useAuth();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const docRef = collection(db, colName);
      if (typeof colName === "string") {
        onSnapshot(docRef, (item) => {
          setDbData(
            item.docs.map((i) => {
              return { ...i.data(), id: i.id };
            })
          );
        });
        setLoading(false);
      }
    };
    fetchData();
  }, [currentUser, colName]);
  return { dbData, loading };
};
